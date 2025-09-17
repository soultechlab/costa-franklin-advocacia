function Header({ mobileMenuOpen, toggleMobileMenu, closeMobileMenu }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg brand-border border-b" style={{backgroundColor: '#0f172a'}}>
      <div className="max-w-5xl mx-auto px-3 sm:px-4 py-1 sm:py-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/src/assets/logo.png"
              alt="Logotipo Costa Franklin Advocacia"
              className="h-20 sm:h-24 md:h-28 w-auto object-contain md:hidden"
              onError={(e) => e.target.style.display = 'none'}
            />
            <img
              src="/src/assets/logo.svg"
              alt="Logotipo Costa Franklin Advocacia"
              className="hidden md:block h-20 sm:h-24 md:h-28 w-auto object-contain"
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition text-white"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-medium text-white">
            <a href="#hero" className="hover:text-white/70 transition">Início</a>
            <a href="#contato" className="hover:text-white/70 transition">Contato</a>
            <a href="#quem-somos" className="hover:text-white/70 transition">Quem Somos</a>
            <a href="#servicos" className="hover:text-white/70 transition">Serviços</a>
          </nav>

        </div>

        <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden mt-3 pt-3 border-t border-white/20 text-white`}>
          <div className="flex flex-col gap-3 pb-3">
            <a href="#hero" onClick={closeMobileMenu} className="hover:text-white/70 transition py-2 px-2 rounded text-center">Início</a>
            <a href="#contato" onClick={closeMobileMenu} className="hover:text-white/70 transition py-2 px-2 rounded text-center">Contato</a>
            <a href="#quem-somos" onClick={closeMobileMenu} className="hover:text-white/70 transition py-2 px-2 rounded text-center">Quem Somos</a>
            <a href="#servicos" onClick={closeMobileMenu} className="hover:text-white/70 transition py-2 px-2 rounded text-center">Serviços</a>
            <div className="pt-3 border-t border-white/20">
              <a href="https://astrea.net.br/#/login/BR" target="_blank" rel="noreferrer" className="btn-primary px-4 py-2 text-sm font-medium rounded-full block text-center">
                Área do Cliente
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header