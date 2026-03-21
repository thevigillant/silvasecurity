import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((el, i) => {
        if (el.isIntersecting) {
          setTimeout(() => {
            el.target.classList.add('visible');
          }, i * 100);
          observer.unobserve(el.target);
        }
      });
    }, { threshold: 0.15 });

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
}
