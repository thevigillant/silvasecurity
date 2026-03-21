"use client";
import { useState } from 'react';
import useNavbarScroll from '../hooks/useNavbarScroll';

export default function Navbar() {
  const isScrolled = useNavbarScroll();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="navbar" className={`${isScrolled ? 'scrolled' : ''} ${isOpen ? 'mobile-open' : ''}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <a href="#" className="logo-link">
          <h4 className="logo-text">SILVA<span>SECURITY</span></h4>
        </a>

        {/* Hamburger Toggle */}
        <button 
          className="nav-toggle d-lg-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <div className={`hamburger ${isOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className={`nav-menu ${isOpen ? 'active' : ''} d-lg-flex align-items-center gap-2 gap-lg-4`}>
          <a href="#servicos" className="nav-link" onClick={() => setIsOpen(false)}>Serviços</a>
          <a href="#diferenciais" className="nav-link" onClick={() => setIsOpen(false)}>Diferenciais</a>
          <a href="#equipe" className="nav-link" onClick={() => setIsOpen(false)}>Equipe</a>
          <a href="https://wa.me/5534992664338" className="btn-nav" target="_blank" rel="noopener noreferrer">Contato</a>
        </div>
      </div>

      <style jsx>{`
        .nav-toggle {
          background: none;
          border: none;
          padding: 10px;
          cursor: pointer;
          z-index: 1001;
        }
        .hamburger span {
          display: block;
          width: 25px;
          height: 2px;
          background: #fff;
          margin: 5px 0;
          transition: 0.3s;
        }
        .hamburger.active span:nth-child(1) { transform: rotate(-45deg) translate(-5px, 6px); }
        .hamburger.active span:nth-child(2) { opacity: 0; }
        .hamburger.active span:nth-child(3) { transform: rotate(45deg) translate(-5px, -6px); }

        @media (max-width: 991px) {
          .nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            max-width: 300px;
            height: 100vh;
            background: rgba(8, 8, 8, 0.98);
            backdrop-filter: blur(20px);
            display: flex;
            flex-direction: column;
            padding: 120px 40px;
            transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
            border-left: 1px solid rgba(224, 26, 26, 0.1);
          }
          .nav-menu.active {
            right: 0;
          }
          .nav-menu .nav-link {
            font-size: 1.2rem;
            margin-bottom: 30px;
          }
        }
      `}</style>
    </nav>
  );
}
