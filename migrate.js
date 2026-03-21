const fs = require('fs');

const rawHtml = fs.readFileSync('index.html', 'utf-8');

// Extract CSS inside <style>
const styleMatch = rawHtml.match(/<style>([\s\S]*?)<\/style>/);
const htmlStyles = styleMatch ? styleMatch[1] : '';

// Read existing style.css
let extStyles = '';
if (fs.existsSync('style.css')) {
  extStyles = fs.readFileSync('style.css', 'utf-8');
}
const globalsCss = extStyles + '\n' + htmlStyles;

fs.mkdirSync('app', { recursive: true });
fs.writeFileSync('app/globals.css', globalsCss);

// Extract HTML body
const bodyMatch = rawHtml.match(/<body>([\s\S]*?)<\/body>/);
let bodyContent = bodyMatch ? bodyMatch[1] : '';

// Convert HTML to JSX
bodyContent = bodyContent.replace(/class=/g, 'className=');
bodyContent = bodyContent.replace(/<!-.*?->/g, ''); // Simple comment strip safely
bodyContent = bodyContent.replace(/<script[\s\S]*?<\/script>/g, '');
bodyContent = bodyContent.replace(/<img(.*?)>/g, (match) => {
  if (match.endsWith('/>')) return match;
  return match.replace(/>$/, ' />');
});
bodyContent = bodyContent.replace(/<input(.*?)>/g, (match) => {
  if (match.endsWith('/>')) return match;
  return match.replace(/>$/, ' />');
});
bodyContent = bodyContent.replace(/<br>/g, '<br />');
bodyContent = bodyContent.replace(/<hr>/g, '<hr />');
bodyContent = bodyContent.replace(/style="([^"]+)"/g, (match, styleString) => {
  const stylesObj = {};
  styleString.split(';').forEach(s => {
    let [key, val] = s.split(':');
    if(key && val) {
      key = key.trim().replace(/-([a-z])/g, (m, c) => c.toUpperCase());
      stylesObj[key] = val.trim();
    }
  });
  return `style={${JSON.stringify(stylesObj)}}`;
});
// Need to handle missing quotes and multiline JSX quirks simply.
bodyContent = bodyContent.replace(/viewBox="0 0 24 24"/g, 'viewBox="0 0 24 24"');

// Generate page.js
const pageJsx = `
"use client";
import { useEffect } from 'react';
import './globals.css';

export default function Home() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js').catch(e => {});

    // Navbar scroll
    const handleScroll = () => {
        const navbar = document.getElementById('navbar');
        if(navbar) navbar.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);

    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((el, i) => {
            if (el.isIntersecting) {
                setTimeout(() => el.target.classList.add('visible'), i * 80);
                observer.unobserve(el.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // Button riples
    const handleRipple = function(e) {
      const btn = e.currentTarget;
      const ripple = document.createElement('span');
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = \`
          position:absolute; width:\${size}px; height:\${size}px;
          left:\${e.clientX - rect.left - size/2}px;
          top:\${e.clientY - rect.top - size/2}px;
          background:rgba(255,255,255,0.25);
          border-radius:50%; transform:scale(0);
          animation:ripple 0.5s linear; pointer-events:none;
      \`;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };
    document.querySelectorAll('.btn-main, .btn-nav, .btn-white').forEach(btn => {
        btn.addEventListener('click', handleRipple);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.querySelectorAll('.btn-main, .btn-nav, .btn-white').forEach(btn => {
        btn.removeEventListener('click', handleRipple);
      });
    };
  }, []);

  return (
    <main>
      ${bodyContent}
    </main>
  );
}
`;
fs.writeFileSync('app/page.jsx', pageJsx);

const layoutJsx = `
export const metadata = {
  title: 'Silva Security | Proteção Profissional',
  description: 'Segurança Privada de Elite',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Outfit:wght@600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
`;
fs.writeFileSync('app/layout.jsx', layoutJsx);

console.log('Migration complete');
