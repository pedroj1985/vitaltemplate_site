"use client";


import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
          <Link href="/" className="flex items-center justify-center cursor-pointer" aria-label="Ir al inicio">
            <Image src="/assets/logo.png" alt="Logo VitalSoluciones" width={265} height={120} priority />
          </Link>
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 font-mono" style={{ background: 'transparent' }}>
          <Link href="/" className="navbar-link flex items-center space-x-2">
            <span>Inicio</span>
          </Link>
          <Link href="/services" className="navbar-link flex items-center space-x-2" prefetch={false}>
            <span>Servicios</span>
          </Link>
          <Link href="/plans" className="navbar-link flex items-center space-x-2" prefetch={false}>
            <span>Planes</span>
          </Link>
          <Link href="/about" className="navbar-link flex items-center space-x-2" prefetch={false}>
            <span>Sobre Nosotros</span>
          </Link>
          <Link href="/blog" className="navbar-link flex items-center space-x-2" prefetch={false}>
            <span>Blog</span>
          </Link>
          <Link href="/faq" className="navbar-link flex items-center space-x-2" prefetch={false}>
            <span>FAQ</span>
          </Link>
          <Link href="/contact" className="navbar-link flex items-center space-x-2" prefetch={false}>
            <span>Contacto</span>
          </Link>
          <Link href="/legal" className="navbar-link flex items-center space-x-2" prefetch={false}>
            <span>Legal</span>
          </Link>
          <Link href="/404" className="navbar-link flex items-center space-x-2" prefetch={false}>
            <span>404</span>
          </Link>
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
            <Link href="/" className="navbar-link text-xl flex items-center space-x-2" onClick={() => setMenuOpen(false)}>
              <span>Inicio</span>
            </Link>
            <Link href="/services" className="navbar-link text-xl flex items-center space-x-2" onClick={() => setMenuOpen(false)} prefetch={false}>
              <span>Servicios</span>
            </Link>
            <Link href="/plans" className="navbar-link text-xl flex items-center space-x-2" onClick={() => setMenuOpen(false)} prefetch={false}>
              <span>Planes</span>
            </Link>
            <Link href="/about" className="navbar-link text-xl flex items-center space-x-2" onClick={() => setMenuOpen(false)} prefetch={false}>
              <span>Sobre Nosotros</span>
            </Link>
            <Link href="/blog" className="navbar-link text-xl flex items-center space-x-2" onClick={() => setMenuOpen(false)} prefetch={false}>
              <span>Blog</span>
            </Link>
            <Link href="/faq" className="navbar-link text-xl flex items-center space-x-2" onClick={() => setMenuOpen(false)} prefetch={false}>
              <span>FAQ</span>
            </Link>
            <Link href="/contact" className="navbar-link text-xl flex items-center space-x-2" onClick={() => setMenuOpen(false)} prefetch={false}>
              <span>Contacto</span>
            </Link>
            <Link href="/legal" className="navbar-link text-xl flex items-center space-x-2" onClick={() => setMenuOpen(false)} prefetch={false}>
              <span>Legal</span>
            </Link>
            <Link href="/404" className="navbar-link text-xl flex items-center space-x-2" onClick={() => setMenuOpen(false)} prefetch={false}>
              <span>404</span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
