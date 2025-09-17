
'use client';
import Link from "next/link";
import React, { useState } from "react";

export default function Home() {
  const [modalKey, setModalKey] = useState<string | null>(null);
  const closeModal = () => setModalKey(null);
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-[#eaf1fa] via-[#f5f7fa] to-[#eaf1fa] pt-16 pb-20 text-center border-b border-[#e5e7eb] mt-0" id="home">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            {/* <span className="inline-block mb-6 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase vital-text bg-[#eaf1fa] bg-opacity-80 border border-[#3270b3]">
              🚀 Especialistas en Next.js & React
            </span> */}
            <h1>
              <span className="vital-text">Sueña</span>, <span className="soluciones-text">nosotros lo hacemos realidad</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto font-mono soluciones-text px-2">
              Creamos páginas web y aplicaciones fáciles de usar, que ayudan a que tu negocio crezca y destaque frente a la competencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center mb-2 px-4">
              <div className="text-center w-full sm:w-auto">
                <Link href="#pricing">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold vital-text border-2 border-[#3270b3] bg-white hover:bg-[#3270b3] hover:text-white transition-colors font-mono">
                  Ver Precios
                </button>
              </Link>
              </div>
              <div className="text-center w-full sm:w-auto">
                <Link href="#contact">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold soluciones-text border-2 border-[#424c54] bg-white hover:bg-[#3270b3] hover:text-white transition-colors font-mono">
                  Consulta Gratis
                </button>
              </Link>
            </div>
            </div>
            <div className="text-center mt-8">
              <span className="text-6xl bg-gradient-to-r from-[#3270b3] to-[#424c54] bg-clip-text text-transparent">⟨⟩</span>
            </div>
            {/* <div className="flex justify-center items-center space-x-8 text-sm opacity-80 font-mono">
              <span className="vital-text">✓ Next.js 14</span>
              <span>✓ TypeScript</span>
              <span>✓ Tailwind CSS</span>
              <span>✓ Vercel Deploy</span>
            </div> */}
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

        {/* Services Section */}
        <section className="w-full bg-gradient-to-br from-[#eaf1fa] via-[#f5f7fa] to-[#eaf1fa] pt-16 pb-20 text-center border-b border-[#e5e7eb]" id="services">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1>¿Qué hacemos?</h1>
              <p className="text-lg sm:text-xl soluciones-text font-mono px-2">Te ayudamos a tener presencia profesional en internet, sin complicaciones. Nos encargamos de todo: desde el diseño hasta que tu web esté funcionando.</p>
            </div>

            <div className="w-full max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mb-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 soluciones-text font-mono">¿Cómo Trabajamos?</h2>
                <p className="text-base sm:text-lg soluciones-text font-mono mb-6 px-2">
                  Creamos tu página web desde cero, escuchando lo que necesitas y adaptando el diseño a tu gusto. Nos encargamos de todo: desde entender tu idea, hasta que tu web esté lista, rápida y visible en internet. Tú solo cuéntanos tu objetivo, nosotros lo hacemos realidad.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
                  <div>
                    <h3 className="text-lg font-bold mb-3 vital-text">¿Con qué herramientas trabajamos?</h3>
                    <ul className="space-y-2 soluciones-text font-mono">
                      <li><span className="text-[#3270b3] mr-2">✔️</span>Usamos tecnología moderna para que tu web sea rápida y segura.</li>
                      <li><span className="text-[#3270b3] mr-2">✔️</span>El diseño se adapta a celulares, tablets y computadoras.</li>
                      <li><span className="text-[#3270b3] mr-2">✔️</span>Tu página estará siempre disponible y cargará en segundos.</li>
                      <li><span className="text-[#3270b3] mr-2">✔️</span>Si necesitas publicar noticias o productos, te damos un panel fácil de usar.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-3 vital-text">¿Cómo trabajamos contigo?</h3>
                    <ul className="space-y-2 soluciones-text font-mono">
                      <li><span className="text-[#3270b3] mr-2">✔️</span>Hablamos contigo para entender tu idea (¡la consulta es gratis!).</li>
                      <li><span className="text-[#3270b3] mr-2">✔️</span>Te mostramos un diseño antes de programar nada.</li>
                      <li><span className="text-[#3270b3] mr-2">✔️</span>Te mantenemos informado durante todo el desarrollo.</li>
                      <li><span className="text-[#3270b3] mr-2">✔️</span>Probamos todo para que funcione perfecto.</li>
                      <li><span className="text-[#3270b3] mr-2">✔️</span>Te entregamos la web lista y te enseñamos a usarla.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-white rounded-xl shadow p-4 sm:p-6 border border-[#e5e7eb] hover:shadow-lg transition-shadow text-center">
                  <div className="text-3xl sm:text-4xl mb-4">🚀</div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 soluciones-text font-mono">Landing Pages</h3>
                  <p className="text-xs sm:text-sm soluciones-text font-mono">Una sola página para captar clientes o mostrar tu producto.</p>
                </div>

                <div className="bg-white rounded-xl shadow p-4 sm:p-6 border border-[#e5e7eb] hover:shadow-lg transition-shadow text-center">
                  <div className="text-3xl sm:text-4xl mb-4">🏢</div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 soluciones-text font-mono">Webs Corporativas</h3>
                  <p className="text-xs sm:text-sm soluciones-text font-mono">Sitios completos para empresas, con varias secciones.</p>
                </div>

                <div className="bg-white rounded-xl shadow p-4 sm:p-6 border border-[#e5e7eb] hover:shadow-lg transition-shadow text-center">
                  <div className="text-3xl sm:text-4xl mb-4">📝</div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 soluciones-text font-mono">Blogs & Contenido</h3>
                  <p className="text-xs sm:text-sm soluciones-text font-mono">Espacios para publicar noticias o artículos fácilmente.</p>
                </div>

                <div className="bg-white rounded-xl shadow p-4 sm:p-6 border border-[#e5e7eb] hover:shadow-lg transition-shadow text-center">
                  <div className="text-3xl sm:text-4xl mb-4">🛍️</div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 soluciones-text font-mono">Tienda Online</h3>
                  <p className="text-xs sm:text-sm soluciones-text font-mono">Vende tus productos en internet, con pagos seguros.</p>
                </div>

                <div className="bg-white rounded-xl shadow p-4 sm:p-6 border border-[#e5e7eb] hover:shadow-lg transition-shadow text-center">
                  <div className="text-3xl sm:text-4xl mb-4">⚡</div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 soluciones-text font-mono">Aplicaciones a Medida</h3>
                  <p className="text-xs sm:text-sm soluciones-text font-mono">Soluciones personalizadas para necesidades especiales.</p>
                </div>

                <div className="bg-white rounded-xl shadow p-4 sm:p-6 border border-[#e5e7eb] hover:shadow-lg transition-shadow text-center">
                  <div className="text-3xl sm:text-4xl mb-4">🔧</div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 soluciones-text font-mono">Mantenimiento</h3>
                  <p className="text-xs sm:text-sm soluciones-text font-mono">Nos ocupamos de que tu web siempre funcione bien.</p>
              </div>
              </div>
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
          <div className="w-full px-4 sm:px-6 lg:px-8">
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
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center mb-2 px-4">
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

        {/* Pricing Section */}
        <section className="w-full bg-gradient-to-br from-[#eaf1fa] via-[#f5f7fa] to-[#eaf1fa] pt-16 pb-20 text-center border-b border-[#e5e7eb]" id="pricing">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1>🧩 Planes y Precios</h1>
              <p className="text-lg sm:text-xl soluciones-text font-mono px-2">Todos nuestros planes incluyen dominio y alojamiento. Te explicamos cada paso y no hay costos ocultos.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {/* Plan Esencial */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-[#22c55e] flex flex-col items-center p-4 sm:p-6 lg:p-8 font-mono hover:scale-105 transition-transform">
                <div className="text-2xl sm:text-3xl mb-2">🟢</div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 soluciones-text">Plan Esencial</h3>
                <div className="text-2xl sm:text-3xl font-bold mb-2 vital-text">$40 USD</div>
                <div className="text-xs sm:text-sm mb-4 soluciones-text">Cuota mensual: $20 USD</div>
                <div className="text-sm sm:text-base lg:text-lg mb-4 soluciones-text text-center">Página simple para mostrar tu negocio y recibir mensajes.</div>
                <ul className="mb-4 text-xs sm:text-sm lg:text-base soluciones-text text-left space-y-1 sm:space-y-2 w-full">
                  <li>✓ Landing Page (una sola página)</li>
                  <li>✓ Diseño responsivo y personalizado</li>
                  <li>✓ Secciones: Inicio, Servicios, Contacto</li>
                  <li>✓ Formulario de contacto</li>
                  <li>✓ Generación estática (SSG)</li>
                  <li>✓ <span className="font-bold text-[#3270b3]">Dominio y hosting incluidos</span></li>
                </ul>
                <div className="text-xs sm:text-sm mb-4 sm:mb-6 soluciones-text">Entrega estimada: 3-5 días</div>
                <button className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold border-2 border-[#22c55e] text-[#22c55e] bg-white hover:bg-[#22c55e] hover:text-white transition-colors text-sm sm:text-base">Solicitar</button>
              </div>

              {/* Plan Profesional */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-[#3b82f6] flex flex-col items-center p-4 sm:p-6 lg:p-8 font-mono hover:scale-105 transition-transform">
                <div className="text-2xl sm:text-3xl mb-2">🔵</div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 soluciones-text">Plan Profesional</h3>
                <div className="text-2xl sm:text-3xl font-bold mb-2 vital-text">$80 USD</div>
                <div className="text-xs sm:text-sm mb-4 soluciones-text">Cuota mensual: $40 USD</div>
                <div className="text-sm sm:text-base lg:text-lg mb-4 soluciones-text text-center">Sitio completo con varias secciones y funciones extra.</div>
                <ul className="mb-4 text-xs sm:text-sm lg:text-base soluciones-text text-left space-y-1 sm:space-y-2 w-full">
                  <li>✓ Sitio institucional multipágina</li>
                  <li>✓ Diseño alineado a la marca</li>
                  <li>✓ SEO básico en cada página</li>
                  <li>✓ Galería, mapa y formularios avanzados</li>
                  <li>✓ Generación estática (SSG)</li>
                  <li>✓ <span className="font-bold text-[#3270b3]">Dominio y hosting incluidos</span></li>
                </ul>
                <div className="text-xs sm:text-sm mb-4 sm:mb-6 soluciones-text">Entrega estimada: 7-15 días</div>
                <button className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold border-2 border-[#3b82f6] text-[#3b82f6] bg-white hover:bg-[#3b82f6] hover:text-white transition-colors text-sm sm:text-base">Solicitar</button>
              </div>

              {/* Plan Contenido Dinámico */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-[#f59e0b] flex flex-col items-center p-4 sm:p-6 lg:p-8 font-mono hover:scale-105 transition-transform">
                <div className="text-2xl sm:text-3xl mb-2">🟠</div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 soluciones-text">Plan Contenido Dinámico</h3>
                <div className="text-2xl sm:text-3xl font-bold mb-2 vital-text">$120 USD</div>
                <div className="text-xs sm:text-sm mb-4 soluciones-text">Cuota mensual: $60 USD</div>
                <div className="text-sm sm:text-base lg:text-lg mb-4 soluciones-text text-center">Publica artículos o noticias fácilmente.</div>
                <ul className="mb-4 text-xs sm:text-sm lg:text-base soluciones-text text-left space-y-1 sm:space-y-2 w-full">
                  <li>✓ Blog o revista digital</li>
                  <li>✓ CMS Headless (Strapi, Sanity, etc.)</li>
                  <li>✓ Categorías, etiquetas y búsqueda interna</li>
                  <li>✓ Regeneración Estática Incremental (ISR)</li>
                  <li>✓ Panel de administración</li>
                  <li>✓ <span className="font-bold text-[#3270b3]">Dominio y hosting incluidos</span></li>
                </ul>
                <div className="text-xs sm:text-sm mb-4 sm:mb-6 soluciones-text">Entrega estimada: 15-30 días</div>
                <button className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold border-2 border-[#f59e0b] text-[#b45309] bg-white hover:bg-[#f59e0b] hover:text-white transition-colors text-sm sm:text-base">Solicitar</button>
              </div>

              {/* Plan a Medida */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-[#ef4444] flex flex-col items-center p-4 sm:p-6 lg:p-8 font-mono hover:scale-105 transition-transform">
                <div className="text-2xl sm:text-3xl mb-2">🔴</div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 soluciones-text">Plan a Medida</h3>
                <div className="text-2xl sm:text-3xl font-bold mb-2 vital-text">$200+ USD</div>
                <div className="text-xs sm:text-sm mb-4 soluciones-text">Cuota mensual: $100+ USD</div>
                <div className="text-sm sm:text-base lg:text-lg mb-4 soluciones-text text-center">Soluciones personalizadas para ideas únicas.</div>
                <ul className="mb-4 text-xs sm:text-sm lg:text-base soluciones-text text-left space-y-1 sm:space-y-2 w-full">
                  <li>✓ SaaS, Marketplace o Dashboard</li>
                  <li>✓ Autenticación, roles y permisos</li>
                  <li>✓ Paneles de control e integración con APIs</li>
                  <li>✓ Backend con lógica de negocio</li>
                  <li>✓ Base de datos y almacenamiento seguro</li>
                  <li>✓ <span className="font-bold text-[#3270b3]">Dominio y hosting incluidos</span></li>
                </ul>
                <div className="text-xs sm:text-sm mb-4 sm:mb-6 soluciones-text">Entrega estimada: según requerimientos</div>
                <button className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold border-2 border-[#ef4444] text-[#ef4444] bg-white hover:bg-[#ef4444] hover:text-white transition-colors text-sm sm:text-base">Solicitar</button>
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
