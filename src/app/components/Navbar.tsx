"use client";
import Link from "next/link";
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
          <a href="#home" className="navbar-link" onClick={e => handleSmoothScroll(e, 'home')}>Inicio</a>
          <a href="#services" className="navbar-link" onClick={e => handleSmoothScroll(e, 'services')}>Servicios</a>
          {/*  <a href="#portafolio" className="navbar-link" onClick={e => handleSmoothScroll(e, 'portafolio')}>Portafolio</a> */}
          <a href="#pricing" className="navbar-link" onClick={e => handleSmoothScroll(e, 'pricing')}>Planes</a>
          <a href="#about" className="navbar-link" onClick={e => handleSmoothScroll(e, 'about')}>Sobre Nosotros</a>
          <a href="#contacto" className="navbar-link" onClick={e => handleSmoothScroll(e, 'contacto')}>Contacto</a>
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
            <a href="#inicio" className="navbar-link text-xl" onClick={e => handleSmoothScroll(e, 'inicio')}>Inicio</a>
            <a href="#servicios" className="navbar-link text-xl" onClick={e => handleSmoothScroll(e, 'servicios')}>Servicios</a>
            {/* <a href="#portafolio" className="navbar-link text-xl" onClick={e => handleSmoothScroll(e, 'portafolio')}>Portafolio</a> */}
            <a href="#pricing" className="navbar-link text-xl" onClick={e => handleSmoothScroll(e, 'pricing')}>Planes</a>
            <a href="#about" className="navbar-link text-xl" onClick={e => handleSmoothScroll(e, 'about')}>Sobre Nosotros</a>
            <a href="#contacto" className="navbar-link text-xl" onClick={e => handleSmoothScroll(e, 'contacto')}>Contacto</a>
          </div>
        )}
      </nav>
    </header>
  );
}
