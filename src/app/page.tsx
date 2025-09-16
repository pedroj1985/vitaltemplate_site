
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans bg-background text-foreground min-h-screen flex flex-col">
      {/* ...existing code... */}

      {/* Main Content */}
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-[#eaf1fa] via-[#f5f7fa] to-[#eaf1fa] pt-16 pb-20 text-center border-b border-[#e5e7eb]">
          <div className="container mx-auto px-6">
            <span className="inline-block mb-6 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase vital-text bg-[#eaf1fa] bg-opacity-80 border border-[#3270b3]">
              🚀 Especialistas en Next.js & React
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-mono">
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

        {/* Services Section */}
        <section className="w-full py-20 bg-[#f5f7fa] border-b border-[#e5e7eb]" id="services">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 vital-text font-mono">Nuestros Servicios</h2>
              <p className="text-xl soluciones-text font-mono">Creamos sitios web que realmente funcionan para tu negocio</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center border border-[#e5e7eb] hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 vital-text">💻</div>
                <h3 className="text-2xl font-bold mb-2 soluciones-text font-mono">Landing Pages</h3>
                <p className="text-base soluciones-text font-mono mb-4 text-center">Páginas ultra rápidas, optimizadas para captar clientes y posicionar tu marca.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center border border-[#e5e7eb] hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 vital-text">🏢</div>
                <h3 className="text-2xl font-bold mb-2 soluciones-text font-mono">Web Corporativa</h3>
                <p className="text-base soluciones-text font-mono mb-4 text-center">Tu empresa online con imagen profesional, responsive y autogestionable.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center border border-[#e5e7eb] hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 vital-text">☁️</div>
                <h3 className="text-2xl font-bold mb-2 soluciones-text font-mono">Aplicaciones SaaS</h3>
                <p className="text-base soluciones-text font-mono mb-4 text-center">Desarrollo de plataformas y apps a medida, escalables y seguras.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        {/* <section className="w-full py-20 bg-[#f5f7fa] border-b border-[#e5e7eb]" id="portfolio">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 vital-text font-mono">Nuestros Trabajos</h2>
              <p className="text-xl soluciones-text font-mono">Sitios web reales que hemos creado para nuestros clientes</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center border border-[#e5e7eb] hover:shadow-lg transition-shadow">
                <img src="/portfolio/ejemplo1.png" alt="Proyecto 1" className="w-24 h-24 object-contain mb-4 rounded" />
                <h3 className="text-xl font-bold mb-2 vital-text font-mono">Tienda Online</h3>
                <p className="text-base soluciones-text font-mono mb-4 text-center">E-commerce moderno, rápido y seguro, integrado con pasarelas de pago.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center border border-[#e5e7eb] hover:shadow-lg transition-shadow">
                <img src="/portfolio/ejemplo2.png" alt="Proyecto 2" className="w-24 h-24 object-contain mb-4 rounded" />
                <h3 className="text-xl font-bold mb-2 vital-text font-mono">Web Corporativa</h3>
                <p className="text-base soluciones-text font-mono mb-4 text-center">Presencia digital profesional para empresas y marcas personales.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center border border-[#e5e7eb] hover:shadow-lg transition-shadow">
                <img src="/portfolio/ejemplo3.png" alt="Proyecto 3" className="w-24 h-24 object-contain mb-4 rounded" />
                <h3 className="text-xl font-bold mb-2 vital-text font-mono">App SaaS</h3>
                <p className="text-base soluciones-text font-mono mb-4 text-center">Aplicación en la nube para gestión y automatización de procesos.</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* About Section */}
        <section className="w-full py-20 bg-white border-b border-[#e5e7eb]" id="about">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 vital-text font-mono">Sobre Nosotros</h2>
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
        <section className="w-full py-20 bg-white border-b border-[#e5e7eb]" id="pricing">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 vital-text font-mono">Planes</h2>
              <p className="text-xl soluciones-text font-mono">Elige el plan que mejor se adapte a tu proyecto</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Plan Básico */}
              <div className="bg-[#f5f7fa] rounded-2xl shadow-xl border-2 border-[#3270b3] flex flex-col items-center p-8 font-mono hover:scale-105 transition-transform">
                <h3 className="text-2xl font-bold vital-text mb-2">Landing Básica</h3>
                <div className="text-4xl font-extrabold mb-4 text-[#3270b3]">$1,500</div>
                <ul className="mb-6 text-base soluciones-text text-left space-y-2">
                  <li>✓ 1 sección scroll</li>
                  <li>✓ Responsive y optimizada</li>
                  <li>✓ Hosting incluido 1 año</li>
                  <li>✓ Entrega en 7 días</li>
                </ul>
                <button className="px-6 py-3 rounded-lg font-bold vital-text border-2 border-[#3270b3] bg-white hover:bg-[#3270b3] hover:text-white transition-colors">Solicitar</button>
              </div>
              {/* Plan Intermedio */}
              <div className="bg-[#eaf1fa] rounded-2xl shadow-xl border-2 border-[#424c54] flex flex-col items-center p-8 font-mono scale-105 md:scale-110 z-10 relative hover:scale-110 transition-transform">
                <h3 className="text-2xl font-bold vital-text mb-2">Web Corporativa</h3>
                <div className="text-4xl font-extrabold mb-4 text-[#424c54]">$6,000</div>
                <ul className="mb-6 text-base soluciones-text text-left space-y-2">
                  <li>✓ Hasta 6 secciones</li>
                  <li>✓ Panel autogestionable</li>
                  <li>✓ Integración con CMS</li>
                  <li>✓ Soporte 3 meses</li>
                </ul>
                <button className="px-6 py-3 rounded-lg font-bold soluciones-text border-2 border-[#424c54] bg-white hover:bg-[#424c54] hover:text-white transition-colors">Solicitar</button>
              </div>
              {/* Plan Premium */}
              <div className="bg-[#f5f7fa] rounded-2xl shadow-xl border-2 border-[#3270b3] flex flex-col items-center p-8 font-mono hover:scale-105 transition-transform">
                <h3 className="text-2xl font-bold vital-text mb-2">App SaaS / Dashboard</h3>
                <div className="text-4xl font-extrabold mb-4 text-[#3270b3]">$18,000+</div>
                <ul className="mb-6 text-base soluciones-text text-left space-y-2">
                  <li>✓ Funcionalidad a medida</li>
                  <li>✓ Escalable y segura</li>
                  <li>✓ Integración APIs</li>
                  <li>✓ Soporte 6 meses</li>
                </ul>
                <button className="px-6 py-3 rounded-lg font-bold vital-text border-2 border-[#3270b3] bg-white hover:bg-[#3270b3] hover:text-white transition-colors">Solicitar</button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-20 bg-[#f5f7fa]" id="testimonials">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 vital-text font-mono">Testimonios</h2>
              <p className="text-xl soluciones-text font-mono">Lo que dicen los clientes sobre nuestras soluciones Next.js</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow p-8 border border-[#e5e7eb] flex flex-col items-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">⭐️⭐️⭐️⭐️⭐️</div>
                <p className="text-base soluciones-text font-mono mb-4 text-center">“El equipo de VitalSoluciones superó nuestras expectativas. La web es rápida, moderna y nos ayudó a captar más clientes.”</p>
                <div className="font-bold vital-text font-mono">Carlos M.</div>
                <div className="text-xs soluciones-text font-mono">CEO, Agencia Creativa</div>
              </div>
              <div className="bg-white rounded-xl shadow p-8 border border-[#e5e7eb] flex flex-col items-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">⭐️⭐️⭐️⭐️⭐️</div>
                <p className="text-base soluciones-text font-mono mb-4 text-center">“Excelente trato y soporte. La migración a Next.js fue sencilla y ahora nuestra web carga en segundos.”</p>
                <div className="font-bold vital-text font-mono">Lucía G.</div>
                <div className="text-xs soluciones-text font-mono">Directora, Startup SaaS</div>
              </div>
              <div className="bg-white rounded-xl shadow p-8 border border-[#e5e7eb] flex flex-col items-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">⭐️⭐️⭐️⭐️⭐️</div>
                <p className="text-base soluciones-text font-mono mb-4 text-center">“Recomiendo 100%. El diseño y la funcionalidad de la web nos diferencian de la competencia.”</p>
                <div className="font-bold vital-text font-mono">Miguel R.</div>
                <div className="text-xs soluciones-text font-mono">Gerente, Comercio Local</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
