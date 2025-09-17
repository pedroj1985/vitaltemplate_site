"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-14 mt-12 font-mono pt-24" id="contact">
      <div className="container mx-auto px-6 pt-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10 items-center">
          <div>
            <div className="flex items-center justify-center mb-4">
              <div className="group cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(50,112,179,0.6)]">
                <Image
                  src="/assets/logo.png"
                  alt="VitalSoluciones Logo"
                  width={48}
                  height={48}
                  className="h-12 w-auto filter brightness-0 invert transition-all duration-300 group-hover:brightness-100 group-hover:invert-0"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="flex items-center space-x-2 hover:text-[#3270b3] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Inicio</span>
              </a></li>
              <li><a href="#services" className="flex items-center space-x-2 hover:text-[#3270b3] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>Servicios</span>
              </a></li>
              <li><a href="#pricing" className="flex items-center space-x-2 hover:text-[#3270b3] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4h-6"/>
                  <path d="M12 18V6"/>
                </svg>
                <span>Planes</span>
              </a></li>
              <li><a href="#about" className="flex items-center space-x-2 hover:text-[#3270b3] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Sobre Nosotros</span>
              </a></li>
              <li><a href="#contact" className="flex items-center space-x-2 hover:text-[#3270b3] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Contacto</span>
              </a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M21 8.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.5" />
                  <path d="M21 8.5V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1.5" />
                  <path d="M3.27 6.96 12 13l8.73-6.04" />
                </svg>
                <span className="text-white">vitalplussoporte@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.209-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.363.71.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.896 6.994c-.003 5.456-4.438 9.891-9.897 9.891zm8.413-18.306A11.815 11.815 0 0 0 12.05 0C5.495 0 .06 5.435.058 12.086c0 2.13.557 4.213 1.615 6.044L.057 24l6.063-1.594a11.93 11.93 0 0 0 5.926 1.511h.005c6.554 0 11.989-5.435 11.991-12.085a11.86 11.86 0 0 0-3.497-8.463z"/>
                </svg>
                <span className="text-white">+53 55161651</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.532-2.513-1.533 0-1.768 1.197-1.768 2.433v4.684h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.599v4.731z"/>
                </svg>
                <span className="text-white">/pedro-rodriguez-paredes</span>
              </li>
            </ul>
          </div>
  {/*         <div className="mt-8">
            <form className="max-w-md mx-auto space-y-3" autoComplete="off">
              <input type="text" name="name" placeholder="Nombre" className="w-full px-3 py-2 rounded bg-[#23272b] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#3270b3]" required />
              <input type="email" name="email" placeholder="Email" className="w-full px-3 py-2 rounded bg-[#23272b] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#3270b3]" required />
              <textarea name="message" placeholder="Mensaje" rows={3} className="w-full px-3 py-2 rounded bg-[#23272b] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#3270b3]" required />
              <button type="submit" className="w-full bg-[#3270b3] py-2 rounded font-mono hover:bg-[#275b8f] transition-colors">Enviar Mensaje</button>
            </form>
          </div> */}
        </div>
        <div className="border-t border-[#334155] pt-8 text-center">
          <p className="text-white">&copy;2025 VitalSoluciones.  Todos los derechos reservados. Desarrollado con Next.js.</p>
        </div>
      </div>
    </footer>
  );
}
