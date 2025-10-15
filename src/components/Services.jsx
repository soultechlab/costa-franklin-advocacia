function Services() {
  const services = [
    {
      title: "Assessoria Condominial",
      description: "Assessoria jurídica completa para condomínios, auxílio em assembleias, demandas judiciais e recuperação de crédito.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Assessoria Empresarial",
      description: "Consultoria jurídica estratégica para empresas, contratos e compliance corporativo.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Direito Penal",
      description: "Defesa criminal especializada, investigações e acompanhamento processual completo.",
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Direito Trabalhista",
      description: "Defesa em processos trabalhistas, rescisões e proteção dos direitos laborais.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Direito Cível e de Família",
      description: "Questões familiares, sucessões, contratos e responsabilidade civil.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop"
    }
  ]

  return (
    <section id="servicos" className="section-padding bg-gradient-to-b from-white to-[var(--brand-muted)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto content-spacing">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] text-sm font-semibold tracking-wide uppercase mb-4">
            Serviços
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance">
            Serviços <span className="text-[var(--brand-accent)]">jurídicos</span> especializados
          </h2>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            Oferecemos assessoria jurídica completa com atendimento personalizado para proteger seus direitos e interesses.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <article key={index} className="card-hover rounded-3xl overflow-hidden bg-white shadow-lg border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-40 sm:h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
