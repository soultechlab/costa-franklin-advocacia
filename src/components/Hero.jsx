import { trackWhatsAppConversion } from '../utils/analytics'

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=1600&auto=format&fit=crop"
          alt="Escritório de advocacia Costa Franklin - Balança da justiça e livros de direito representando excelência jurídica no Rio de Janeiro"
          className="w-full h-[60vh] sm:h-[70vh] object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40 sm:from-black/50 sm:via-black/40 sm:to-black/30"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 h-[60vh] sm:h-[70vh] flex items-center">
        <div className="text-white max-w-full sm:max-w-3xl text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance mobile-text-center">
            Advocacia com <span className="text-[var(--brand-accent)]">Excelência</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-white/90 leading-relaxed text-balance mobile-text-center">
            Unindo tradição e inovação na prestação de serviços jurídicos personalizados. Nossa missão é garantir justiça, proteger direitos e construir soluções sólidas para cada cliente.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-center sm:items-start">
            <a href="#contato" className="pill px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[var(--brand-accent)] to-[#c9a332] text-black font-semibold text-base sm:text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center">
              Consulta Gratuita
            </a>
            <a href="https://wa.me/5521964782828" target="_blank" rel="noreferrer" onClick={trackWhatsAppConversion} className="pill px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/80 text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold text-base sm:text-lg backdrop-blur-sm w-full sm:w-auto text-center">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero