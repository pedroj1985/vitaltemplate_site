import React from "react";
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
      <p className="text-lg mb-8 max-w-2xl text-center">
        Somos un equipo apasionado por la tecnología y el diseño. Ayudamos a negocios y profesionales a crecer en internet con soluciones modernas y efectivas.
      </p>
      {/* Puedes agregar más información sobre el equipo, misión, valores, etc. */}
    </div>
  );
}
