
'use client';

import Link from "next/link";
import { useState } from 'react';
/* import { ServiceModal } from './components/ServiceModal';

async function getData() {
  // Aquí puedes hacer fetch de datos si los necesitas
  return {
    servicios: [
      {
        emoji: "🚀",
        titulo: "Landing Pages",
        descripcion: "Una sola página para captar clientes o mostrar tu producto."
      },
      // ... más servicios
    ]
  };
}
 */
export default function Home() {
  const [modalKey, setModalKey] = useState<string | null>(null);

  const closeModal = () => setModalKey(null);
  const openModal = (key: string) => setModalKey(key);
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col w-full">
      {/* Main Content */}
      <main className="w-full">
        {/* Hero Section - Template Showcase */}
        <section className="w-full bg-gradient-to-br from-[#eaf1fa] via-[#f5f7fa] to-[#eaf1fa] pt-16 pb-20 text-center border-b border-[#e5e7eb] mt-0" id="home">
          <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 vital-text">Sitio Web Template</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto font-mono soluciones-text px-2">
              Este es un template de sitio web profesional con Next.js, ideal para mostrar tu negocio, blog, preguntas frecuentes, contacto y más.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link href="/about">
                <button className="px-6 py-3 rounded-lg font-semibold border-2 border-[#3270b3] bg-white hover:bg-[#3270b3] hover:text-white transition-colors font-mono">Sobre Nosotros</button>
              </Link>
              <Link href="/blog">
                <button className="px-6 py-3 rounded-lg font-semibold border-2 border-[#3b82f6] bg-white hover:bg-[#3b82f6] hover:text-white transition-colors font-mono">Blog</button>
              </Link>
              <Link href="/faq">
                <button className="px-6 py-3 rounded-lg font-semibold border-2 border-[#f59e0b] bg-white hover:bg-[#f59e0b] hover:text-white transition-colors font-mono">Preguntas Frecuentes</button>
              </Link>
              <Link href="/contact">
                <button className="px-6 py-3 rounded-lg font-semibold border-2 border-[#22c55e] bg-white hover:bg-[#22c55e] hover:text-white transition-colors font-mono">Contacto</button>
              </Link>
              <Link href="/legal">
                <button className="px-6 py-3 rounded-lg font-semibold border-2 border-[#424c54] bg-white hover:bg-[#424c54] hover:text-white transition-colors font-mono">Legal</button>
              </Link>
              <Link href="/404">
                <button className="px-6 py-3 rounded-lg font-semibold border-2 border-[#ef4444] bg-white hover:bg-[#ef4444] hover:text-white transition-colors font-mono">Página 404</button>
              </Link>
            </div>
            <div className="text-center mt-8">
              <span className="text-6xl bg-gradient-to-r from-[#3270b3] to-[#424c54] bg-clip-text text-transparent">⟨⟩</span>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <span className="text-xs font-mono opacity-70">Incluye secciones: Home, Sobre, Blog, FAQ, Contacto, Legal, 404</span>
            </div>
          </div>
        </section>

        {/* Modal */}
        {modalKey && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" onClick={closeModal}></div>
            <div className="relative bg-white w-[92%] max-w-xl rounded-2xl shadow-2xl border border-[#e5e7eb] p-6 mx-4">
              <button onClick={closeModal} aria-label="Cerrar" className="absolute top-3 right-3 text-xl leading-none">×</button>
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
              {modalKey === 'corporativa' && (
                <div>
                  <h3 className="text-xl font-bold mb-2 soluciones-text font-mono">Web Corporativa</h3>
                  <p className="soluciones-text font-mono mb-4">Multipágina: empresa, servicios, equipo y misión. Ideal para marcas y profesionales.</p>
                  <p className="text-sm uppercase tracking-wide font-bold mb-2 vital-text">Características</p>
                  <ul className="list-disc pl-5 soluciones-text font-mono space-y-1">
                    <li>Inicio, Sobre, Servicios, Portafolio, Contacto</li>
                    <li>Diseño alineado a la marca</li>
                    <li>SEO en cada página</li>
                    <li>Mapas, galerías y formularios</li>
                    <li>SSG para alto rendimiento</li>
                  </ul>
                </div>
              )}
              {modalKey === 'blog' && (
                <div>
                  <h3 className="text-xl font-bold mb-2 soluciones-text font-mono">Blog & Contenido</h3>
                  <p className="soluciones-text font-mono mb-4">Publicación de artículos con CMS headless y foco en SEO y rendimiento.</p>
                  <p className="text-sm uppercase tracking-wide font-bold mb-2 vital-text">Características</p>
                  <ul className="list-disc pl-5 soluciones-text font-mono space-y-1">
                    <li>Inicio con últimos y destacados</li>
                    <li>Paginación, categorías y etiquetas</li>
                    <li>Detalle optimizado para lectura</li>
                    <li>CMS Headless (Strapi, Contentful, Sanity)</li>
                    <li>Búsqueda interna + ISR</li>
                  </ul>
                </div>
              )}
              {modalKey === 'ecommerce' && (
                <div>
                  <h3 className="text-xl font-bold mb-2 soluciones-text font-mono">E-commerce</h3>
                  <p className="soluciones-text font-mono mb-4">Tiendas o catálogos con foco en conversión, SEO y velocidad.</p>
                  <p className="text-sm uppercase tracking-wide font-bold mb-2 vital-text">Características</p>
                  <ul className="list-disc pl-5 soluciones-text font-mono space-y-1">
                    <li>Productos con SSG y SEO</li>
                    <li>Filtros avanzados</li>
                    <li>Carrito y checkout seguro</li>
                    <li>Stripe, PayPal, Mercado Pago</li>
                    <li>Shopify headless / CMS</li>
                    <li>SSR en páginas dinámicas</li>
                  </ul>
                </div>
              )}
              {modalKey === 'saas' && (
                <div>
                  <h3 className="text-xl font-bold mb-2 soluciones-text font-mono">SaaS & Apps</h3>
                  <p className="soluciones-text font-mono mb-4">Plataformas a medida con lógica compleja, tiempo real y datos a escala.</p>
                  <p className="text-sm uppercase tracking-wide font-bold mb-2 vital-text">Características</p>
                  <ul className="list-disc pl-5 soluciones-text font-mono space-y-1">
                    <li>Autenticación completa</li>
                    <li>Perfiles y roles</li>
                    <li>Dashboards de gestión</li>
                    <li>Integración con múltiples APIs</li>
                    <li>Base de datos</li>
                    <li>API Routes en Next.js</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Secciones de ejemplo del template */}
        <section className="w-full bg-gradient-to-br from-[#f5f7fa] to-[#eaf1fa] pt-16 pb-20 text-center border-b border-[#e5e7eb]" id="template-sections">
          <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2 vital-text">Explora las secciones del template</h2>
              <p className="text-lg sm:text-xl soluciones-text font-mono px-2">Este template incluye páginas esenciales para cualquier web moderna. Haz clic para ver ejemplos reales:</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/about">
                <div className="bg-white rounded-xl shadow p-6 border border-[#e5e7eb] hover:shadow-lg transition-shadow text-center cursor-pointer">
                  <div className="text-3xl mb-2">👥</div>
                  <h3 className="text-lg font-bold mb-2 soluciones-text font-mono">Sobre Nosotros</h3>
                  <p className="text-sm soluciones-text font-mono">Conoce la historia, misión y valores de tu empresa.</p>
                </div>
              </Link>
              <Link href="/blog">
                <div className="bg-white rounded-xl shadow p-6 border border-[#e5e7eb] hover:shadow-lg transition-shadow text-center cursor-pointer">
                  <div className="text-3xl mb-2">�</div>
                  <h3 className="text-lg font-bold mb-2 soluciones-text font-mono">Blog</h3>
                  <p className="text-sm soluciones-text font-mono">Publica artículos, novedades y recursos útiles.</p>
                </div>
              </Link>
              <Link href="/faq">
                <div className="bg-white rounded-xl shadow p-6 border border-[#e5e7eb] hover:shadow-lg transition-shadow text-center cursor-pointer">
                  <div className="text-3xl mb-2">❓</div>
                  <h3 className="text-lg font-bold mb-2 soluciones-text font-mono">Preguntas Frecuentes</h3>
                  <p className="text-sm soluciones-text font-mono">Resuelve dudas comunes de tus clientes.</p>
                </div>
              </Link>
              <Link href="/contact">
                <div className="bg-white rounded-xl shadow p-6 border border-[#e5e7eb] hover:shadow-lg transition-shadow text-center cursor-pointer">
                  <div className="text-3xl mb-2">�</div>
                  <h3 className="text-lg font-bold mb-2 soluciones-text font-mono">Contacto</h3>
                  <p className="text-sm soluciones-text font-mono">Formulario para que te contacten fácilmente.</p>
                </div>
              </Link>
              <Link href="/legal">
                <div className="bg-white rounded-xl shadow p-6 border border-[#e5e7eb] hover:shadow-lg transition-shadow text-center cursor-pointer">
                  <div className="text-3xl mb-2">⚖️</div>
                  <h3 className="text-lg font-bold mb-2 soluciones-text font-mono">Legal</h3>
                  <p className="text-sm soluciones-text font-mono">Incluye aviso legal, privacidad y condiciones de uso.</p>
                </div>
              </Link>
              <Link href="/404">
                <div className="bg-white rounded-xl shadow p-6 border border-[#e5e7eb] hover:shadow-lg transition-shadow text-center cursor-pointer">
                  <div className="text-3xl mb-2">�</div>
                  <h3 className="text-lg font-bold mb-2 soluciones-text font-mono">Página 404</h3>
                  <p className="text-sm soluciones-text font-mono">Ejemplo de página de error personalizada.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        {/* <section className="w-full bg-gradient-to-br from-[#eaf1fa] via-[#f5f7fa] to-[#eaf1fa] pt-16 pb-20 text-center border-b border-[#e5e7eb]" id="portfolio">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-mono">Nuestros Trabajos</h1>
              <p className="text-xl soluciones-text font-mono">Sitios web reales que hemos creado para nuestros clientes</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center border border-[#e5e7eb] hover:shadow-lg transition-shadow">
                <img src="/portfolio/ejemplo1.png" alt="Proyecto 1" className="w-24 h-24 object-contain mb-4 rounded" />
                <h3 className="text-xl font-bold mb-2 font-mono">Tienda Online</h3>
                <p className="text-base soluciones-text font-mono mb-4 text-center">E-commerce moderno, rápido y seguro, integrado con pasarelas de pago.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center border border-[#e5e7eb] hover:shadow-lg transition-shadow">
                <img src="/portfolio/ejemplo2.png" alt="Proyecto 2" className="w-24 h-24 object-contain mb-4 rounded" />
                <h3 className="text-xl font-bold mb-2 font-mono">Web Corporativa</h3>
                <p className="text-base soluciones-text font-mono mb-4 text-center">Presencia digital profesional para empresas y marcas personales.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center border border-[#e5e7eb] hover:shadow-lg transition-shadow">
                <img src="/portfolio/ejemplo3.png" alt="Proyecto 3" className="w-24 h-24 object-contain mb-4 rounded" />
                <h3 className="text-xl font-bold mb-2 font-mono">App SaaS</h3>
                <p className="text-base soluciones-text font-mono mb-4 text-center">Aplicación en la nube para gestión y automatización de procesos.</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* About Section */}
        <section className="w-full bg-gradient-to-br from-[#eaf1fa] via-[#f5f7fa] to-[#eaf1fa] pt-16 pb-20 text-center border-b border-[#e5e7eb]" id="about">
          <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1>¿Por qué elegirnos?</h1>
            </div>
            <div className="w-full max-w-4xl mx-auto text-center">
              <div>
                <p className="text-base sm:text-lg soluciones-text font-mono mb-6 px-2">
                  Diseñamos páginas rápidas, seguras y que se ven bien en cualquier dispositivo. Nuestro objetivo es que consigas más clientes y que tu marca crezca.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 justify-items-center">
                  <div className="bg-white rounded-lg border border-[#e5e7eb] p-4 shadow-sm">
                    <div className="text-2xl mb-1">🚀</div>
                    <div className="font-bold mb-1 soluciones-text font-mono">Enfoque en resultados</div>
                    <div className="text-sm soluciones-text font-mono">Nos enfocamos en resultados reales, no solo en diseño.</div>
                  </div>
                  <div className="bg-white rounded-lg border border-[#e5e7eb] p-4 shadow-sm">
                    <div className="text-2xl mb-1">🔒</div>
                    <div className="font-bold mb-1 soluciones-text font-mono">Calidad y seguridad</div>
                    <div className="text-sm soluciones-text font-mono">Usamos herramientas modernas, pero tú solo ves lo fácil que es tener tu web lista.</div>
                  </div>
                </div>
                {/* <div className="flex flex-wrap gap-6 mb-8 justify-center text-center">
                  <div className="text-left">
                    <div className="text-3xl font-extrabold vital-text">+50</div>
                    <div className="text-sm soluciones-text font-mono opacity-80">Proyectos entregados</div>
                  </div>
                  <div className="text-left">
                    <div className="text-3xl font-extrabold vital-text">5+ años</div>
                    <div className="text-sm soluciones-text font-mono opacity-80">de experiencia</div>
                  </div>
                  <div className="text-left">
                    <div className="text-3xl font-extrabold vital-text">100%</div>
                    <div className="text-sm soluciones-text font-mono opacity-80">enfoque en Next.js</div>
                  </div>
                </div> */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center mb-2 px-2 sm:px-4">
                  <div className="text-center w-full sm:w-auto">
                    <Link href="#pricing">
                      <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold vital-text border-2 border-[#3270b3] bg-white hover:bg-[#3270b3] hover:text-white transition-colors font-mono">
                        Ver Planes
                      </button>
                    </Link>
                  </div>
                  <div className="text-center w-full sm:w-auto">
                    <Link href="#services">
                      <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold soluciones-text border-2 border-[#424c54] bg-white hover:bg-[#3270b3] hover:text-white transition-colors font-mono">
                        Qué hacemos
                      </button>
                    </Link>
              </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section (descripción general) */}
        <section className="w-full bg-gradient-to-br from-[#eaf1fa] via-[#f5f7fa] to-[#eaf1fa] pt-16 pb-20 text-center border-b border-[#e5e7eb]" id="pricing">
          <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1>🧩 Planes y Precios</h1>
              <p className="text-lg sm:text-xl soluciones-text font-mono px-2">
                Ofrecemos diferentes planes para adaptarnos a tus necesidades: desde landing pages hasta soluciones a medida. Consulta todos los detalles y precios en la página de{' '}
                <Link href="/plans" className="underline text-blue-600 hover:text-blue-800">Planes</Link>.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              <div className="bg-white rounded-2xl shadow-xl border-2 border-[#22c55e] flex flex-col items-center p-4 sm:p-6 lg:p-8 font-mono">
                <div className="text-2xl sm:text-3xl mb-2">🟢</div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 soluciones-text">Plan Esencial</h3>
                <div className="text-sm sm:text-base lg:text-lg mb-4 soluciones-text text-center">Ideal para quienes necesitan una web simple y efectiva.</div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl border-2 border-[#3b82f6] flex flex-col items-center p-4 sm:p-6 lg:p-8 font-mono">
                <div className="text-2xl sm:text-3xl mb-2">🔵</div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 soluciones-text">Plan Profesional</h3>
                <div className="text-sm sm:text-base lg:text-lg mb-4 soluciones-text text-center">Para empresas o marcas que buscan presencia completa.</div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl border-2 border-[#f59e0b] flex flex-col items-center p-4 sm:p-6 lg:p-8 font-mono">
                <div className="text-2xl sm:text-3xl mb-2">🟠</div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 soluciones-text">Plan Contenido Dinámico</h3>
                <div className="text-sm sm:text-base lg:text-lg mb-4 soluciones-text text-center">Perfecto para blogs, revistas o sitios con publicaciones frecuentes.</div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl border-2 border-[#ef4444] flex flex-col items-center p-4 sm:p-6 lg:p-8 font-mono">
                <div className="text-2xl sm:text-3xl mb-2">🔴</div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 soluciones-text">Plan a Medida</h3>
                <div className="text-sm sm:text-base lg:text-lg mb-4 soluciones-text text-center">Soluciones personalizadas para proyectos únicos.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <section className="w-full bg-gradient-to-br from-[#eaf1fa] via-[#f5f7fa] to-[#eaf1fa] pt-16 pb-20 text-center border-b border-[#e5e7eb]" id="testimonials">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-mono">Testimonios</h1>
              <p className="text-xl soluciones-text font-mono">Lo que dicen los clientes sobre nuestras soluciones Next.js</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow p-8 border border-[#e5e7eb] flex flex-col items-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">⭐️⭐️⭐️⭐️⭐️</div>
                <p className="text-base soluciones-text font-mono mb-4 text-center">“El equipo de VitalSoluciones superó nuestras expectativas. La web es rápida, moderna y nos ayudó a captar más clientes.”</p>
                <div className="font-bold font-mono">Carlos M.</div>
                <div className="text-xs soluciones-text font-mono">CEO, Agencia Creativa</div>
              </div>
              <div className="bg-white rounded-xl shadow p-8 border border-[#e5e7eb] flex flex-col items-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">⭐️⭐️⭐️⭐️⭐️</div>
                <p className="text-base soluciones-text font-mono mb-4 text-center">“Excelente trato y soporte. La migración a Next.js fue sencilla y ahora nuestra web carga en segundos.”</p>
                <div className="font-bold font-mono">Lucía G.</div>
                <div className="text-xs soluciones-text font-mono">Directora, Startup SaaS</div>
              </div>
              <div className="bg-white rounded-xl shadow p-8 border border-[#e5e7eb] flex flex-col items-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">⭐️⭐️⭐️⭐️⭐️</div>
                <p className="text-base soluciones-text font-mono mb-4 text-center">“Recomiendo 100%. El diseño y la funcionalidad de la web nos diferencian de la competencia.”</p>
                <div className="font-bold font-mono">Miguel R.</div>
                <div className="text-xs soluciones-text font-mono">Gerente, Comercio Local</div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
