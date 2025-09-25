function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-8 sm:mt-16 brand-border border-t" style={{backgroundColor: '#0f172a'}}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-sm text-white">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <img
              src="/img/icon.png"
              alt="Ícone Costa Franklin Advocacia"
              className="h-8 sm:h-10 w-auto object-contain"
              onError={(e) => e.target.style.display = 'none'}
            />
            <span className="font-semibold text-white text-sm sm:text-base">Costa Franklin Advocacia</span>
          </div>
          <p className="mt-3 text-white/70 text-xs sm:text-sm leading-relaxed">
            Escritório de advocacia Full Service especializado em direito empresarial, condominial, trabalhista, penal, cível, família, entre outros ramos do direito, com atendimento personalizado.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3 items-center justify-center md:justify-start">
            <a href="https://wa.me/5521964782828" target="_blank" rel="noreferrer" className="pill px-3 sm:px-4 py-2 transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm w-full sm:w-auto justify-center" style={{background: 'linear-gradient(135deg, #d2ad36 0%, #c9a332 100%)', color: '#111'}}>
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </a>
            <a href="mailto:contato@costafranklinadvogados.com.br" className="pill px-3 sm:px-4 py-2 text-white hover:opacity-80 transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm w-full sm:w-auto justify-center" style={{backgroundColor: '#334155'}}>
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26c.34.18.74.18 1.08 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              E-mail
            </a>
          </div>
        </div>
        <div className="hidden md:block text-center md:text-left">
          <h4 className="font-semibold mb-3 text-white text-sm sm:text-base">Atalhos</h4>
          <ul className="space-y-2 text-white/80 text-xs sm:text-sm">
            <li><a href="#servicos" className="hover:text-white transition">Serviços</a></li>
            <li><a href="#quem-somos" className="hover:text-white transition">Quem Somos</a></li>
            <li><a href="#contato" className="hover:text-white transition">Contato</a></li>
            <li><a href="https://wa.me/5521964782828" target="_blank" rel="noreferrer" className="hover:text-white transition">WhatsApp</a></li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-[var(--brand-accent)]">Contato Direto</h4>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <p className="text-white/60 text-xs sm:text-sm mb-1">Telefone</p>
              <a href="tel:+5521964782828" className="text-white hover:text-[var(--brand-accent)] transition font-medium text-xs sm:text-sm">
                (21) 96478-2828
              </a>
            </div>
            <div>
              <p className="text-white/60 text-xs sm:text-sm mb-1">E-mail</p>
              <a href="mailto:contato@costafranklinadvogados.com.br" className="text-white hover:text-[var(--brand-accent)] transition font-medium break-all text-xs sm:text-sm">
                contato@costafranklinadvogados.com.br
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 mt-6 sm:mt-8 pt-4 sm:pt-6 pb-4 text-center">
        <p className="text-white text-xs sm:text-sm">© {currentYear} Costa Franklin Advocacia. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer