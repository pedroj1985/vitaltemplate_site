"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll suave para links internos
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100; // Ajusta según la altura del navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 w-full shadow-lg z-50" style={{ background: 'var(--header-background)', color: 'var(--header-foreground)' }}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center" style={{ color: 'var(--header-foreground)' }}>
        <div className="flex items-center space-x-3">
          <a href="#home" className="flex items-center justify-center cursor-pointer" aria-label="Ir al inicio" onClick={e => handleSmoothScroll(e, 'home')}>
            <Image src="/assets/logo.png" alt="Logo VitalSoluciones" width={265} height={120} priority />
          </a>
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 font-mono" style={{ background: 'transparent' }}>
          <a href="#home" className="navbar-link flex items-center space-x-2" onClick={e => handleSmoothScroll(e, 'home')}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Inicio</span>
          </a>
          <a href="#services" className="navbar-link flex items-center space-x-2" onClick={e => handleSmoothScroll(e, 'services')}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span>Servicios</span>
          </a>
          {/*  <a href="#portafolio" className="navbar-link" onClick={e => handleSmoothScroll(e, 'portafolio')}>Portafolio</a> */}
          <a href="#pricing" className="navbar-link flex items-center space-x-2" onClick={e => handleSmoothScroll(e, 'pricing')}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4h-6"/>
              <path d="M12 18V6"/>
            </svg>
            <span>Planes</span>
          </a>
          <a href="#about" className="navbar-link flex items-center space-x-2" onClick={e => handleSmoothScroll(e, 'about')}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>Sobre Nosotros</span>
          </a>
{/*           <a href="#contact" className="navbar-link flex items-center space-x-2" onClick={e => handleSmoothScroll(e, 'contacto')}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Contacto</span>
          </a> */}
          {/* <button className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
            Cotizar Proyecto
          </button> */}
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="absolute top-20 left-0 w-full bg-[#23272b] z-50 flex flex-col items-center py-8 space-y-6 font-mono shadow-lg md:hidden animate-fade-in">
            <a href="#inicio" className="navbar-link text-xl flex items-center space-x-2" onClick={e => handleSmoothScroll(e, 'inicio')}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Inicio</span>
            </a>
            <a href="#servicios" className="navbar-link text-xl flex items-center space-x-2" onClick={e => handleSmoothScroll(e, 'servicios')}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Servicios</span>
            </a>
            {/* <a href="#portafolio" className="navbar-link text-xl" onClick={e => handleSmoothScroll(e, 'portafolio')}>Portafolio</a> */}
            <a href="#pricing" className="navbar-link text-xl flex items-center space-x-2" onClick={e => handleSmoothScroll(e, 'pricing')}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4h-6"/>
                <path d="M12 18V6"/>
              </svg>
              <span>Planes</span>
            </a>
            <a href="#about" className="navbar-link text-xl flex items-center space-x-2" onClick={e => handleSmoothScroll(e, 'about')}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Sobre Nosotros</span>
            </a>
            <a href="#contact" className="navbar-link text-xl flex items-center space-x-2" onClick={e => handleSmoothScroll(e, 'contacto')}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contacto</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
