import React from "react";
export default function LegalPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Aviso Legal</h1>
      <p className="text-lg mb-8 max-w-2xl text-center">
        Aquí puedes incluir el aviso legal, política de privacidad y condiciones de uso de tu sitio web.
      </p>
      {/* Agrega aquí el contenido legal necesario para tu país o sector */}
    </div>
  );
}
