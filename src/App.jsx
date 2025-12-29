import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Topbar from './components/Topbar'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import RegistroMarcas from './pages/RegistroMarcas'
import DireitoCriminal from './pages/DireitoCriminal'
import AssessoriaCondominial from './pages/AssessoriaCondominial'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  // Homepage Component
  const HomePage = () => (
    <div className="text-neutral-900">
      <Topbar />
      <Header
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
      />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/registro-de-marcas" element={<RegistroMarcas />} />
      <Route path="/direito-criminal" element={<DireitoCriminal />} />
      <Route path="/assessoria-condominial" element={<AssessoriaCondominial />} />
    </Routes>
  )
}

export default App