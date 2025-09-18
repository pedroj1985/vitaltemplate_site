import React from "react";
export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Preguntas Frecuentes</h1>
      <p className="text-lg mb-8 max-w-2xl text-center">
        Resuelve tus dudas sobre nuestros servicios, procesos y soporte. Si tienes otra pregunta, ¡contáctanos!
      </p>
      {/* Aquí puedes agregar un listado de preguntas y respuestas */}
    </div>
  );
}
