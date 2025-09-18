'use client';
import { useState } from 'react';

interface ModalProps {
  modalKey: string | null;
  onClose: () => void;
}

export function ServiceModal({ modalKey, onClose }: ModalProps) {
  if (!modalKey) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="relative bg-white w-[92%] max-w-xl rounded-2xl shadow-2xl border border-[#e5e7eb] p-6 mx-4">
        <button onClick={onClose} aria-label="Cerrar" className="absolute top-3 right-3 text-xl leading-none">×</button>
        {modalKey === 'landing' && (
          <div>
            <h3 className="text-xl font-bold mb-2 soluciones-text font-mono">Landing Page</h3>
            <p className="soluciones-text font-mono mb-4">Un sitio de una sola página para presentar tu negocio, promocionar un producto o capturar leads. Ideal para campañas, profesionales independientes o startups.</p>
            <p className="text-sm uppercase tracking-wide font-bold mb-2 vital-text">Características</p>
            <ul className="list-disc pl-5 soluciones-text font-mono space-y-1">
              <li>Diseño limpio y directo</li>
              <li>Secciones clave y CTAs claras</li>
              <li>Formulario de contacto/newsletter</li>
              <li>SSG para máxima velocidad</li>
            </ul>
          </div>
        )}
        {/* Resto de los modales... */}
      </div>
    </div>
  );
}