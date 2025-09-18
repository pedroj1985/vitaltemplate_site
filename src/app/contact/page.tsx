import React from "react";
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Contacto</h1>
      <p className="text-lg mb-8 max-w-2xl text-center">
        ¿Tienes dudas o quieres un presupuesto? Completa el formulario y te responderemos pronto.
      </p>
      {/* Aquí puedes importar y mostrar el formulario de contacto */}
    </div>
  );
}
