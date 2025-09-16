
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
          <div className="container mx-auto px-6">
            <span className="inline-block mb-6 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase vital-text bg-[#eaf1fa] bg-opacity-80 border border-[#3270b3]">
              🚀 Especialistas en Next.js & React
            </span>
            <h1>
              <span className="vital-text">Sueña</span>, <span className="soluciones-text">nosotros lo hacemos realidad</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto font-mono soluciones-text">
              Creamos sitios web y aplicaciones que hacen crecer tu negocio y te posicionan por encima de la competencia.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              <Link href="/pricing">
                <button className="px-8 py-4 rounded-lg text-lg font-semibold vital-text border-2 border-[#3270b3] bg-white hover:bg-[#3270b3] hover:text-white transition-colors font-mono">
                  Ver Precios
                </button>
              </Link>
              <Link href="/about">
                <button className="px-8 py-4 rounded-lg text-lg font-semibold soluciones-text border-2 border-[#424c54] bg-white hover:bg-[#3270b3] hover:text-white transition-colors font-mono">
                  Consulta Gratis
                </button>
              </Link>
            </div>
            <div className="flex justify-center items-center space-x-8 text-sm opacity-80 font-mono">
              <span className="vital-text">✓ Next.js 14</span>
              <span>✓ TypeScript</span>
              <span>✓ Tailwind CSS</span>
              <span>✓ Vercel Deploy</span>
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

        {/* Services Section */}
        <section className="w-full bg-gradient-to-br from-[#eaf1fa] via-[#f5f7fa] to-[#eaf1fa] pt-16 pb-20 text-center border-b border-[#e5e7eb]" id="services">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1>Nuestros Servicios</h1>
              <p className="text-xl soluciones-text font-mono">Explora los tipos de sitio según tus objetivos</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left">
              {/* Card 1 */}
              <div className="bg-white rounded-xl shadow p-6 border border-[#e5e7eb] hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="text-4xl">🚀</div>
                  <div>
                    <p className="text-sm uppercase tracking-wide font-bold vital-text">Tipo de Sitio</p>
                    <h3 className="text-base font-bold soluciones-text font-mono">Landing Page</h3>
                  </div>
                  <a href="#" onClick={(e) => { e.preventDefault(); setModalKey('landing'); }} className="text-sm text-[#3270b3] underline font-mono">Más</a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl shadow p-6 border border-[#e5e7eb] hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="text-4xl">🏢</div>
                  <div>
                    <p className="text-sm uppercase tracking-wide font-bold vital-text">Tipo de Sitio</p>
                    <h3 className="text-base font-bold soluciones-text font-mono">Web Corporativa</h3>
                  </div>
                  <a href="#" onClick={(e) => { e.preventDefault(); setModalKey('corporativa'); }} className="text-sm text-[#3270b3] underline font-mono">Más</a>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl shadow p-6 border border-[#e5e7eb] hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="text-4xl">📝</div>
                  <div>
                    <p className="text-sm uppercase tracking-wide font-bold vital-text">Tipo de Sitio</p>
                    <h3 className="text-base font-bold soluciones-text font-mono">Blog & Contenido</h3>
                  </div>
                  <a href="#" onClick={(e) => { e.preventDefault(); setModalKey('blog'); }} className="text-sm text-[#3270b3] underline font-mono">Más</a>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-xl shadow p-6 border border-[#e5e7eb] hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="text-4xl">🛍️</div>
                  <div>
                    <p className="text-sm uppercase tracking-wide font-bold vital-text">Tipo de Sitio</p>
                    <h3 className="text-base font-bold soluciones-text font-mono">E-commerce</h3>
                  </div>
                  <a href="#" onClick={(e) => { e.preventDefault(); setModalKey('ecommerce'); }} className="text-sm text-[#3270b3] underline font-mono">Más</a>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-white rounded-xl shadow p-6 border border-[#e5e7eb] hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="text-4xl">⚡</div>
                  <div>
                    <p className="text-sm uppercase tracking-wide font-bold vital-text">Tipo de Sitio</p>
                    <h3 className="text-base font-bold soluciones-text font-mono">SaaS & Apps</h3>
                  </div>
                  <a href="#" onClick={(e) => { e.preventDefault(); setModalKey('saas'); }} className="text-sm text-[#3270b3] underline font-mono">Más</a>
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
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1>Sobre Nosotros</h1>
                <p className="text-lg soluciones-text font-mono mb-6">
                  Somos especialistas en crear sitios web que realmente funcionan para tu negocio. Con más de 5 años de experiencia, no hacemos páginas básicas, sino herramientas digitales que te ayudan a vender más.
                </p>
                <ul className="list-disc pl-6 soluciones-text font-mono mb-6">
                  <li>+50 proyectos entregados</li>
                  <li>Expertos en Next.js, React y Tailwind</li>
                  <li>Soporte y acompañamiento personalizado</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#3270b3] via-[#eaf1fa] to-[#424c54] rounded-xl h-96 flex items-center justify-center relative overflow-hidden shadow-lg">
                <div className="text-white text-center z-10">
                  <div className="text-6xl mb-4">⚡</div>
                  <div className="text-2xl font-bold font-mono">Next.js</div>
                  <div className="text-lg opacity-90 font-mono">Especialista</div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full bg-gradient-to-br from-[#eaf1fa] via-[#f5f7fa] to-[#eaf1fa] pt-16 pb-20 text-center border-b border-[#e5e7eb]" id="pricing">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1>🧩 Planes y Precios</h1>
              <p className="text-xl soluciones-text font-mono">Elige el plan ideal y empieza a construir</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Plan Esencial */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-[#22c55e] flex flex-col items-center p-8 font-mono hover:scale-105 transition-transform">
                <div className="text-3xl mb-2">🟢</div>
                <h3 className="text-2xl font-bold mb-1 soluciones-text">Plan Esencial</h3>
                <div className="text-lg mb-4 soluciones-text">$40 USD / <span className="font-bold">$10 USD</span> mensual</div>
                <ul className="mb-4 text-base soluciones-text text-left space-y-2 w-full">
                  <li>✓ Landing Page (una sola página)</li>
                  <li>✓ Diseño responsivo y personalizado</li>
                  <li>✓ Secciones: Inicio, Servicios, Contacto</li>
                  <li>✓ Formulario de contacto</li>
                  <li>✓ Generación estática (SSG)</li>
                </ul>
                <div className="text-sm mb-6 soluciones-text">Entrega estimada: 3-5 días</div>
                <button className="px-6 py-3 rounded-lg font-bold border-2 border-[#22c55e] text-[#22c55e] bg-white hover:bg-[#22c55e] hover:text-white transition-colors">Solicitar</button>
              </div>

              {/* Plan Profesional */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-[#3b82f6] flex flex-col items-center p-8 font-mono hover:scale-105 transition-transform">
                <div className="text-3xl mb-2">🔵</div>
                <h3 className="text-2xl font-bold mb-1 soluciones-text">Plan Profesional</h3>
                <div className="text-lg mb-4 soluciones-text">$80 USD / <span className="font-bold">$20 USD</span> mensual</div>
                <ul className="mb-4 text-base soluciones-text text-left space-y-2 w-full">
                  <li>✓ Sitio institucional multipágina</li>
                  <li>✓ Diseño alineado a la marca</li>
                  <li>✓ SEO básico en cada página</li>
                  <li>✓ Galería, mapa y formularios avanzados</li>
                  <li>✓ Generación estática (SSG)</li>
                </ul>
                <div className="text-sm mb-6 soluciones-text">Entrega estimada: 7-15 días</div>
                <button className="px-6 py-3 rounded-lg font-bold border-2 border-[#3b82f6] text-[#3b82f6] bg-white hover:bg-[#3b82f6] hover:text-white transition-colors">Solicitar</button>
              </div>

              {/* Plan Contenido Dinámico */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-[#f59e0b] flex flex-col items-center p-8 font-mono hover:scale-105 transition-transform">
                <div className="text-3xl mb-2">🟠</div>
                <h3 className="text-2xl font-bold mb-1 soluciones-text">Plan Contenido Dinámico</h3>
                <div className="text-lg mb-4 soluciones-text">$120 USD / <span className="font-bold">$30 USD</span> mensual</div>
                <ul className="mb-4 text-base soluciones-text text-left space-y-2 w-full">
                  <li>✓ Blog o revista digital</li>
                  <li>✓ CMS Headless (Strapi, Sanity, etc.)</li>
                  <li>✓ Categorías, etiquetas y búsqueda interna</li>
                  <li>✓ Regeneración Estática Incremental (ISR)</li>
                  <li>✓ Panel de administración</li>
                </ul>
                <div className="text-sm mb-6 soluciones-text">Entrega estimada: 15-30 días</div>
                <button className="px-6 py-3 rounded-lg font-bold border-2 border-[#f59e0b] text-[#b45309] bg-white hover:bg-[#f59e0b] hover:text-white transition-colors">Solicitar</button>
              </div>

              {/* Plan a Medida */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-[#ef4444] flex flex-col items-center p-8 font-mono hover:scale-105 transition-transform">
                <div className="text-3xl mb-2">🔴</div>
                <h3 className="text-2xl font-bold mb-1 soluciones-text">Plan a Medida</h3>
                <div className="text-lg mb-4 soluciones-text">Desde $250 USD / <span className="font-bold">Desde $50 USD</span> mensual</div>
                <ul className="mb-4 text-base soluciones-text text-left space-y-2 w-full">
                  <li>✓ SaaS, Marketplace o Dashboard</li>
                  <li>✓ Autenticación, roles y permisos</li>
                  <li>✓ Paneles de control e integración con APIs</li>
                  <li>✓ Backend con lógica de negocio</li>
                  <li>✓ Base de datos y almacenamiento seguro</li>
                </ul>
                <div className="text-sm mb-6 soluciones-text">Entrega estimada: según requerimientos</div>
                <button className="px-6 py-3 rounded-lg font-bold border-2 border-[#ef4444] text-[#ef4444] bg-white hover:bg-[#ef4444] hover:text-white transition-colors">Solicitar</button>
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
