"use client";

export default function Footer() {
  return (
    <footer className="py-14 mt-12 font-mono" id="contacto">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="group cursor-pointer transition-transform duration-200 hover:scale-105">
                <span className="text-3xl font-bold transition-colors duration-200 group-hover:text-primary">VitalSoluciones</span>
              </div>
            </div>
            <p className="text-[#dee2e6] opacity-95 font-mono">
              Desarrollo web profesional con Next.js para empresas que buscan resultados excepcionales.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#servicios" className="hover:text-white transition-colors">Landing Pages SSG</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Web Corporativa</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Aplicaciones SaaS</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Consultoría Digital</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Tecnologías</h3>
            <ul className="space-y-2">
              <li>Next.js 14 & React</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Vercel & AWS</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M21 8.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.5" />
                  <path d="M21 8.5V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1.5" />
                  <path d="M3.27 6.96 12 13l8.73-6.04" />
                </svg>
                <span>vitalplussoporte@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.209-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.363.71.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.896 6.994c-.003 5.456-4.438 9.891-9.897 9.891zm8.413-18.306A11.815 11.815 0 0 0 12.05 0C5.495 0 .06 5.435.058 12.086c0 2.13.557 4.213 1.615 6.044L.057 24l6.063-1.594a11.93 11.93 0 0 0 5.926 1.511h.005c6.554 0 11.989-5.435 11.991-12.085a11.86 11.86 0 0 0-3.497-8.463z"/>
                </svg>
                <span>+53 55161651</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.532-2.513-1.533 0-1.768 1.197-1.768 2.433v4.684h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.599v4.731z"/>
                </svg>
                <span>/pedro-rodriguez-paredes</span>
              </li>
            </ul>
            <form className="space-y-3" autoComplete="off">
              <input type="text" name="name" placeholder="Nombre" className="w-full px-3 py-2 rounded bg-[#23272b] placeholder-[#dee2e6] focus:outline-none focus:ring-2 focus:ring-primary" required />
              <input type="email" name="email" placeholder="Email" className="w-full px-3 py-2 rounded bg-[#23272b] placeholder-[#dee2e6] focus:outline-none focus:ring-2 focus:ring-primary" required />
              <textarea name="message" placeholder="Mensaje" rows={3} className="w-full px-3 py-2 rounded bg-[#23272b] placeholder-[#dee2e6] focus:outline-none focus:ring-2 focus:ring-primary" required />
              <button type="submit" className="w-full bg-primary py-2 rounded font-mono hover:bg-secondary transition-colors">Enviar Mensaje</button>
            </form>
          </div>
        </div>
        <div className="border-t border-[#495057] pt-8 text-center">
          <p>&copy; 2025 VitalSoluciones. Desarrollo profesional con Next.js - Sueña, nosotros lo hacemos realidad.</p>
        </div>
      </div>
    </footer>
  );
}
