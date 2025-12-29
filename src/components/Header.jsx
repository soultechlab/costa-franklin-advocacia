import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header({ mobileMenuOpen, toggleMobileMenu, closeMobileMenu }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg brand-border border-b" style={{backgroundColor: '#0f172a'}}>
      <div className="max-w-5xl mx-auto px-3 sm:px-4 py-1 sm:py-1">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img
              src="/img/logo.png"
              alt="Logotipo Costa Franklin Advocacia"
              className="h-20 sm:h-24 md:h-28 w-auto object-contain md:hidden"
              onError={(e) => e.target.style.display = 'none'}
            />
            <img
              src="/img/logo.svg"
              alt="Logotipo Costa Franklin Advocacia"
              className="hidden md:block h-20 sm:h-24 md:h-28 w-auto object-contain"
              onError={(e) => e.target.style.display = 'none'}
            />
          </Link>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition text-white"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-medium text-white">
            <Link to="/" className="hover:text-[#D8B354] transition">Início</Link>

            {/* Dropdown Menu */}
            <div
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="hover:text-[#D8B354] transition flex items-center gap-1">
                Áreas de Atuação
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              <div className={`${dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border-2 border-[#D8B354] overflow-hidden transition-all duration-200`}>
                <Link
                  to="/assessoria-condominial"
                  className="block px-4 py-3 text-gray-800 hover:bg-[#D8B354] hover:text-white transition-colors border-b border-gray-100"
                >
                  <div className="font-semibold">Assessoria Condominial</div>
                  <div className="text-xs mt-1 opacity-75">Suporte jurídico completo</div>
                </Link>
                <Link
                  to="/direito-criminal"
                  className="block px-4 py-3 text-gray-800 hover:bg-[#D8B354] hover:text-white transition-colors border-b border-gray-100"
                >
                  <div className="font-semibold">Direito Criminal</div>
                  <div className="text-xs mt-1 opacity-75">Defesa penal especializada</div>
                </Link>
                <Link
                  to="/registro-de-marcas"
                  className="block px-4 py-3 text-gray-800 hover:bg-[#D8B354] hover:text-white transition-colors"
                >
                  <div className="font-semibold">Registro de Marcas</div>
                  <div className="text-xs mt-1 opacity-75">Proteção jurídica no INPI</div>
                </Link>
              </div>
            </div>

            <a href="/#contato" className="hover:text-[#D8B354] transition">Contato</a>
            <a href="/#quem-somos" className="hover:text-[#D8B354] transition">Quem Somos</a>
          </nav>

        </div>

        <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden mt-3 pt-3 border-t border-white/20 text-white`}>
          <div className="flex flex-col gap-3 pb-3">
            <Link to="/" onClick={closeMobileMenu} className="hover:text-[#D8B354] transition py-2 px-2 rounded text-center">Início</Link>

            {/* Mobile Dropdown */}
            <div className="border-t border-b border-white/20 py-2">
              <div className="text-[#D8B354] font-semibold text-center mb-2">Áreas de Atuação</div>
              <Link to="/assessoria-condominial" onClick={closeMobileMenu} className="hover:text-[#D8B354] transition py-2 px-2 rounded block text-center">
                Assessoria Condominial
              </Link>
              <Link to="/direito-criminal" onClick={closeMobileMenu} className="hover:text-[#D8B354] transition py-2 px-2 rounded block text-center">
                Direito Criminal
              </Link>
              <Link to="/registro-de-marcas" onClick={closeMobileMenu} className="hover:text-[#D8B354] transition py-2 px-2 rounded block text-center">
                Registro de Marcas
              </Link>
            </div>

            <a href="/#contato" onClick={closeMobileMenu} className="hover:text-[#D8B354] transition py-2 px-2 rounded text-center">Contato</a>
            <a href="/#quem-somos" onClick={closeMobileMenu} className="hover:text-[#D8B354] transition py-2 px-2 rounded text-center">Quem Somos</a>
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