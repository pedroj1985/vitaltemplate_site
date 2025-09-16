"use client";
import Link from "next/link";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="shadow-lg w-full top-0 z-50" style={{ background: 'var(--header-background)', color: 'var(--header-foreground)' }}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center" style={{ color: 'var(--header-foreground)' }}>
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 flex items-center justify-center">
            <img src="/assets/logo.png" alt="Logo VitalSoluciones" className="w-16 h-16 object-contain" />
          </div>
          <div className="group cursor-pointer transition-transform duration-200 hover:scale-105">
            <span className="text-3xl font-bold transition-colors duration-200 group-hover:text-primary" style={{ color: 'var(--vital-color)' }}>Vital</span>
            <span className="text-3xl font-bold transition-colors duration-200 group-hover:text-border" style={{ color: 'var(--soluciones-color)' }}>Soluciones</span>
          </div>
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 font-mono" style={{ background: 'transparent' }}>
            <Link href="#inicio" className="navbar-link">Inicio</Link>
            <Link href="#servicios" className="navbar-link">Servicios</Link>
            {/*  <Link href="#portafolio" className="navbar-link">Portafolio</Link> */}
            <Link href="#pricing" className="navbar-link">Planes</Link>
            <Link href="#about" className="navbar-link">Sobre Nosotros</Link>
            <Link href="#contacto" className="navbar-link">Contacto</Link>
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
            <Link href="#inicio" className="navbar-link text-xl" onClick={() => setMenuOpen(false)}>Inicio</Link>
            <Link href="#servicios" className="navbar-link text-xl" onClick={() => setMenuOpen(false)}>Servicios</Link>
            {/* <Link href="#portafolio" className="navbar-link text-xl" onClick={() => setMenuOpen(false)}>Portafolio</Link> */}
            <Link href="#pricing" className="navbar-link text-xl" onClick={() => setMenuOpen(false)}>Planes</Link>
            <Link href="#about" className="navbar-link text-xl" onClick={() => setMenuOpen(false)}>Sobre Nosotros</Link>
            <Link href="#contacto" className="navbar-link text-xl" onClick={() => setMenuOpen(false)}>Contacto</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
