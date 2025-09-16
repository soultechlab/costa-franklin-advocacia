function About() {
  return (
    <section id="quem-somos" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src="/img/eles.jpg"
            alt="Sócios do escritório"
            className="rounded-3xl shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[var(--brand-accent)] to-[#c9a332] rounded-3xl opacity-20"></div>
        </div>
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] text-sm font-semibold tracking-wide uppercase mb-6">
            Sobre Nós
          </div>
          <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Quem <span className="text-[var(--brand-accent)]">Somos</span>
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Costa Franklin Advocacia é um escritório de advocacia com sólida experiência no mercado jurídico, atuando nas áreas de direito civil, trabalhista e empresarial. Nosso diferencial é o atendimento personalizado e humanizado, sempre focado na necessidade específica de cada cliente.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contato" className="pill px-6 py-3 font-semibold btn-primary text-lg">
              Consulta Gratuita
            </a>
            <a href="mailto:contato@costafranklinadvocacia.com.br" className="pill px-6 py-3 font-semibold text-white hover:opacity-80 transition-all duration-300 text-lg" style={{backgroundColor: '#334155'}}>
              E-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About