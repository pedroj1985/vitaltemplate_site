import React from "react";
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
      <p className="text-lg mb-8 max-w-2xl text-center">
        Ofrecemos soluciones digitales a medida: desarrollo web, landing pages, sitios corporativos, blogs, tiendas online y más. ¡Cuéntanos tu idea!
      </p>
      {/* Aquí puedes agregar cards o secciones para cada servicio */}
    </div>
  );
}
