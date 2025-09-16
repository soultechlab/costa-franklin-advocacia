function Header({ mobileMenuOpen, toggleMobileMenu, closeMobileMenu }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg brand-border border-b" style={{backgroundColor: '#0f172a'}}>
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/img/LogoSemFundo.png"
              alt="Logotipo Costa Franklin Advocacia"
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-white">
            <a href="#hero" className="hover:text-white/70 transition">Início</a>
            <a href="#contato" className="hover:text-white/70 transition">Contato</a>
            <a href="#quem-somos" className="hover:text-white/70 transition">Quem Somos</a>
            <a href="#servicos" className="hover:text-white/70 transition">Serviços</a>
          </nav>

        </div>

        <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 pt-4 border-t border-white/20 text-white`}>
          <div className="flex flex-col gap-4">
            <a href="#hero" onClick={closeMobileMenu} className="hover:text-white/70 transition py-2">Início</a>
            <a href="#contato" onClick={closeMobileMenu} className="hover:text-white/70 transition py-2">Contato</a>
            <a href="#quem-somos" onClick={closeMobileMenu} className="hover:text-white/70 transition py-2">Quem Somos</a>
            <a href="#servicos" onClick={closeMobileMenu} className="hover:text-white/70 transition py-2">Serviços</a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header