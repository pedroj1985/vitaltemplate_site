import React from "react";
export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
      <p className="text-lg mb-8 max-w-2xl text-center">
        Lo sentimos, la página que buscas no existe. Puedes volver al inicio o explorar nuestros servicios.
      </p>
      {/* Puedes agregar un botón para volver al home */}
    </div>
  );
}
