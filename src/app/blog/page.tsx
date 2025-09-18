import React from "react";
export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-lg mb-8 max-w-2xl text-center">
        Aquí encontrarás artículos, novedades y recursos útiles sobre desarrollo web, diseño y tecnología.
      </p>
      {/* Aquí puedes listar posts o conectar con un CMS */}
    </div>
  );
}
