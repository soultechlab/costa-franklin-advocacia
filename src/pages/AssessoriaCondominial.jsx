import { useState } from 'react'
import { Building2, Users, FileText, Scale, Gavel, Shield, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import Topbar from '../components/Topbar'
import { trackWhatsAppConversion } from '../utils/analytics'

const AssessoriaCondominial = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const whatsappNumber = '5521964782828'
  const whatsappMessage = 'Olá! Vim pelo Google e gostaria de iniciar um atendimento com um especialista em Assessoria Condominial.'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const benefits = [
    {
      icon: Shield,
      title: 'Proteção Jurídica Completa',
      description: 'Garanta a segurança jurídica do seu condomínio com orientação preventiva e resolução eficiente de conflitos.'
    },
    {
      icon: Users,
      title: 'Gestão de Assembleias',
      description: 'Suporte técnico para convocação, condução e documentação de assembleias ordinárias e extraordinárias.'
    },
    {
      icon: Gavel,
      title: 'Recuperação de Crédito',
      description: 'Atuação estratégica na cobrança judicial e extrajudicial de inadimplentes, garantindo a saúde financeira do condomínio.'
    }
  ]

  const services = [
    {
      icon: Building2,
      title: 'Elaboração e Revisão de Convenção e Regimento Interno',
      description: 'Criação e atualização de documentos condominiais em conformidade com a legislação vigente.'
    },
    {
      icon: Users,
      title: 'Assessoria em Assembleias',
      description: 'Suporte completo na convocação, pauta, condução e lavratura de atas de assembleias gerais.'
    },
    {
      icon: FileText,
      title: 'Elaboração de Pareceres Jurídicos',
      description: 'Análise técnica de questões condominiais para embasar decisões administrativas.'
    },
    {
      icon: Scale,
      title: 'Cobrança de Inadimplentes',
      description: 'Ações de cobrança extrajudicial e judicial de taxas condominiais e multas em atraso.'
    },
    {
      icon: Gavel,
      title: 'Defesa em Ações Judiciais',
      description: 'Representação do condomínio em processos judiciais e administrativos.'
    },
    {
      icon: Shield,
      title: 'Consultoria Preventiva',
      description: 'Orientação contínua para evitar conflitos e garantir conformidade legal nas decisões administrativas.'
    }
  ]

  const faqs = [
    {
      question: 'O que é assessoria jurídica condominial?',
      answer: 'É o serviço de consultoria e representação legal prestado ao condomínio, abrangendo desde a elaboração de documentos até a defesa em processos judiciais e cobrança de inadimplentes.'
    },
    {
      question: 'O condomínio é obrigado a ter advogado?',
      answer: 'Não é obrigatório para todas as situações, mas é altamente recomendável. A assessoria jurídica previne problemas, garante conformidade legal e protege o condomínio em questões complexas.'
    },
    {
      question: 'Como funciona a cobrança de condôminos inadimplentes?',
      answer: 'Iniciamos com tentativas extrajudiciais de acordo. Persistindo a inadimplência, podemos ajuizar ação de cobrança para recuperar os valores devidos, acrescidos de juros, multa e honorários.'
    },
    {
      question: 'Quem pode contratar o advogado do condomínio?',
      answer: 'A contratação é deliberada em assembleia geral e formalizada pelo síndico, que representa legalmente o condomínio.'
    },
    {
      question: 'O que fazer quando há conflito entre condôminos?',
      answer: 'A assessoria jurídica analisa o caso, orienta sobre as medidas cabíveis e, se necessário, representa o condomínio em ações judiciais para resolver o conflito.'
    },
    {
      question: 'Como atualizar a convenção de condomínio?',
      answer: 'A alteração da convenção exige aprovação em assembleia com quórum qualificado. O advogado elabora a minuta, conduz o processo e registra a alteração no cartório de imóveis.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFDF6] to-white">
      <Topbar />
      <Header
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
      />

      {/* Botão Voltar Mobile */}
      <div className="md:hidden sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <Link
            to="/"
            className="flex items-center gap-2 text-[#0f172a] hover:text-[#D8B354] transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1B1B1B] to-[#2d2d2d] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1920&auto=format&fit=crop)' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#D8B354] mb-6 leading-tight drop-shadow-lg">
              Assessoria jurídica completa para o seu condomínio
            </h1>
            <div className="w-32 h-1.5 bg-[#D8B354] mb-6"></div>
            <p className="text-white text-lg md:text-xl mb-8 leading-relaxed drop-shadow-md">
              Proteção legal, gestão eficiente de assembleias e recuperação de crédito. Garantimos segurança jurídica e conformidade para o seu condomínio.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppConversion}
              className="inline-block pill px-8 py-4 bg-gradient-to-r from-[var(--brand-accent)] to-[#c9a332] text-black font-semibold text-sm tracking-wide hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              FALE COM UM ESPECIALISTA
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F7F7F7] to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-b from-white to-[#F7F7F7] p-8 rounded-3xl border-2 border-[#4E4E4E] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                  style={{
                    backgroundImage: 'url("/images/card-bg.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-[#F7F7F7]/95"></div>
                  <div className="relative z-10">
                    <Icon className="w-12 h-12 text-[#D8B354] mb-4" />
                    <h3 className="text-xl font-semibold text-[#2d2d2d] mb-3 leading-tight">
                      {benefit.title.split('<br>').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < benefit.title.split('<br>').length - 1 && <br />}
                        </span>
                      ))}
                    </h3>
                    <p className="text-[#4a4a4a] text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#FFFEFC] to-white p-8 md:p-12 rounded-lg shadow-xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#464646] mb-4">
              Costa e Franklin Advocacia
            </h2>
            <div className="w-24 h-1 bg-[#D8B354] mb-6"></div>
            <div className="space-y-4 text-[#363636] text-base leading-relaxed">
              <p>
                O escritório, liderado pelos Drs. <strong>Felipe Franklin</strong> e <strong>Victor Costa</strong>, é especializado em <strong>assessoria condominial</strong>, oferecendo suporte jurídico completo para condomínios residenciais e comerciais.
              </p>
              <p>
                Nossa atuação abrange <strong>elaboração e revisão de convenções e regimentos internos</strong>, <strong>assessoria em assembleias</strong>, <strong>pareceres jurídicos</strong>, <strong>cobrança de inadimplentes</strong>, <strong>defesa em ações judiciais</strong> e <strong>consultoria preventiva</strong> para garantir conformidade legal e evitar conflitos.
              </p>
              <p>
                Trabalhamos com orientação estratégica para síndicos e administradoras, oferecendo soluções práticas e eficientes para os desafios do dia a dia condominial. Nossa abordagem é <strong>técnica, preventiva e humanizada</strong>, sempre focada na proteção dos interesses do condomínio e na promoção de um ambiente harmônico entre os condôminos.
              </p>
              <p>
                <strong>Fale com um especialista</strong> e conte com uma assessoria jurídica sólida, ética e comprometida com a segurança do seu condomínio.
              </p>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppConversion}
              className="inline-block mt-8 pill px-8 py-3 bg-gradient-to-r from-[var(--brand-accent)] to-[#c9a332] text-black font-semibold text-xs tracking-wide hover:shadow-xl transition-all duration-300"
            >
              FALE COM UM ESPECIALISTA
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#F8F8F8] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1920&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#2d2d2d] text-lg mb-2 inline-block px-4 py-2 rounded-full font-medium">
              Principais Áreas de Atuação
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#D8B354] mb-4">
              Serviços Jurídicos em Assessoria Condominial
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl border-2 border-[#D8B354] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <Icon className="w-12 h-12 text-[#D8B354] mb-4" />
                  <h3 className="text-lg font-semibold text-[#D8B354] mb-3 leading-tight">
                    {service.title.split('<br>').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < service.title.split('<br>').length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                  <p className="text-[#0f172a] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppConversion}
              className="inline-block pill px-8 py-4 bg-gradient-to-r from-[var(--brand-accent)] to-[#c9a332] text-black font-semibold text-xs tracking-wide hover:shadow-xl transition-all duration-300"
            >
              AGENDE UMA CONSULTA
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F7F7F7] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#D8B354] text-center mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-center text-[#4a4a4a] text-lg mb-12">
              Encontre respostas rápidas e esclarecedoras sobre nossos serviços.
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white border-2 border-[#D8B354] rounded-lg shadow-md overflow-hidden"
                >
                  <summary className="cursor-pointer p-4 font-medium text-[#2d2d2d] bg-gradient-to-r from-[#D8B354] to-[#C8A951] hover:from-[#C8A951] hover:to-[#D8B354] transition-all duration-300 flex justify-between items-center">
                    <span className="text-sm">{faq.question}</span>
                    <span className="text-[#2d2d2d] text-xl">+</span>
                  </summary>
                  <div className="p-4 bg-white text-[#4a4a4a] text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default AssessoriaCondominial
