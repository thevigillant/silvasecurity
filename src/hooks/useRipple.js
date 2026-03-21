import { useEffect } from 'react';

export default function useRipple() {
  useEffect(() => {
    const handleRipple = (e) => {
      const btn = e.currentTarget;
      const ripple = document.createElement('span');
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      
      ripple.classList.add('ripple-effect');
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };

    const buttons = document.querySelectorAll('.btn-main, .btn-nav, .btn-white, .btn-premium');
    buttons.forEach(btn => btn.addEventListener('click', handleRipple));

    return () => {
      buttons.forEach(btn => btn.removeEventListener('click', handleRipple));
    };
  }, []);
}
