import { useState } from 'react'
import { Search, Clipboard, FileText, AlertCircle, Scale, Award, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import Topbar from '../components/Topbar'

const DireitoCriminal = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const whatsappNumber = '5521964782828'
  const whatsappMessage = 'Olá! Vim pelo Google e gostaria de iniciar um atendimento com um especialista em Direito Criminal.'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const benefits = [
    {
      icon: Search,
      title: 'Atendimento Imediato e Orientação na Delegacia',
      description: 'Atuação 24h para flagrantes, oitivas e medidas urgentes. Preservação de direitos desde o primeiro contato com a autoridade policial.'
    },
    {
      icon: Scale,
      title: 'Liberdade Provisória e Habeas Corpus',
      description: 'Pedidos de fiança, relaxamento de prisão, revogação de preventiva e HC. Atuação ágil para cessar constrangimentos ilegais.'
    },
    {
      icon: FileText,
      title: 'Acompanhamento de Inquérito Policial',
      description: 'Monitoramento do procedimento investigativo, requerimentos, diligências e defesas técnicas. Atuação estratégica para evitar o oferecimento da denúncia.'
    }
  ]

  const services = [
    {
      icon: Search,
      title: 'Atendimento Imediato e Orientação na Delegacia',
      description: 'Atuação 24h para flagrantes, oitivas e medidas urgentes. Preservação de direitos desde o primeiro contato com a autoridade policial.'
    },
    {
      icon: Clipboard,
      title: 'Liberdade Provisória e Habeas Corpus',
      description: 'Pedidos de fiança, relaxamento de prisão, revogação de preventiva e HC. Atuação ágil para cessar constrangimentos ilegais.'
    },
    {
      icon: FileText,
      title: 'Acompanhamento de Inquérito Policial',
      description: 'Monitoramento do procedimento investigativo, requerimentos, diligências e defesas técnicas. Atuação estratégica para evitar o oferecimento da denúncia.'
    },
    {
      icon: AlertCircle,
      title: 'Resposta à Acusação e Defesas Preliminares',
      description: 'Elaboração de teses defensivas, arrolamento de provas e pedidos de absolvição sumária. Atuação técnica desde o início do processo.'
    },
    {
      icon: Scale,
      title: 'Recursos e Sustentações Orais',
      description: 'Interposição de apelações, embargos e recursos aos tribunais superiores. Sustentações orais e atuação combativa em segunda instância.'
    },
    {
      icon: Award,
      title: 'Execução Penal e Benefícios',
      description: 'Progressão de regime, remição, livramento condicional, indulto e unificação de penas. Acompanhamento completo para garantir direitos na execução.'
    }
  ]

  const faqs = [
    {
      question: 'Fui intimado para depor na delegacia. Preciso ir com advogado?',
      answer: 'Sim. A presença de um advogado garante seus direitos, orienta sobre o que responder, verifica o teor do inquérito e evita autoincriminações indevidas.'
    },
    {
      question: 'Recebi citação para responder a processo criminal. O que faço?',
      answer: 'Procure um defensor imediatamente. É possível apresentar resposta escrita, juntar provas, indicar testemunhas e pedir absolvição já nas primeiras fases.'
    },
    {
      question: 'Posso ser preso em flagrante? Quais são meus direitos?',
      answer: 'Sim, em flagrante delito. Você tem direito ao silêncio, a comunicar um familiar e a um advogado. O juiz deve analisar conversão em preventiva ou conceder liberdade provisória.'
    },
    {
      question: 'O que é audiência de custódia?',
      answer: 'É a apresentação do preso a um juiz em até 24 horas para verificar legalidade da prisão, eventuais abusos e a necessidade de liberdade provisória ou medidas cautelares.'
    },
    {
      question: 'Sou investigado. Posso pedir acesso ao inquérito?',
      answer: 'Regra geral, sim. A defesa tem direito a acessar elementos já documentados, garantindo contraditório e ampla defesa, salvo diligências sigilosas em andamento.'
    },
    {
      question: 'O que é acordo de não persecução penal (ANPP)?',
      answer: 'É um acordo com o Ministério Público para crimes sem violência, com pena mínima inferior a 4 anos. Cumpridas condições, o processo é evitado. Requer análise técnica do caso.'
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
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://lbaadvocacia.com.br/wp-content/uploads/2025/12/Victor-Costa-Costa-Franklin-Direito-Criminal-3.png)' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#D8B354] mb-6 leading-tight drop-shadow-lg">
              Proteção imediata aos seus direitos em todas as fases do processo
            </h1>
            <div className="w-32 h-1.5 bg-[#D8B354] mb-6"></div>
            <p className="text-white text-lg md:text-xl mb-8 leading-relaxed drop-shadow-md">
              Defesa penal técnica e discreta, do inquérito ao julgamento, com foco na legalidade, no sigilo e na proteção dos seus direitos.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
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
                O escritório, liderado pelos Drs. <strong>Felipe Franklin</strong> e <strong>Victor Costa</strong>, é dedicado à <strong>defesa criminal</strong> e ao <strong>processo penal</strong>, atuando com prontidão e sigilo em todas as fases: <strong>investigações policiais e inquéritos</strong>, <strong>audiência de custódia</strong>, <strong>prisões em flagrante</strong>, <strong>medidas cautelares</strong>, <strong>habeas corpus</strong>, <strong>acordos de não persecução penal</strong>, <strong>recursos</strong> e <strong>execução penal</strong>.
              </p>
              <p>
                Nossa prática abrange <strong>crimes econômicos</strong>, <strong>contra a administração pública</strong>, <strong>Lei de Drogas</strong>, <strong>violência doméstica</strong>, <strong>crimes cibernéticos</strong>, <strong>trânsito</strong>, <strong>Tribunal do Júri</strong> e demandas correlatas. Também realizamos <strong>investigação defensiva</strong> e <strong>compliance penal</strong>, com atuação preventiva para reduzir riscos e orientar depoimentos, buscas e apreensões e tratativas com o Ministério Público.
              </p>
              <p>
                O atendimento é <strong>técnico, estratégico e humanizado</strong>, com <strong>disponibilidade 24h</strong> para emergências, absoluto <strong>sigilo profissional</strong> e foco na <strong>proteção das garantias fundamentais</strong> do cliente. Trabalhamos com <strong>clareza, objetividade e compromisso</strong>, alinhando a estratégia ao que cada caso exige.
              </p>
              <p>
                <strong>Fale com um especialista</strong> e conte com uma defesa penal sólida, ética e eficaz.
              </p>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
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
          backgroundImage: 'url("https://lbaadvocacia.com.br/wp-content/uploads/2025/12/Victor-Costa-Costa-Franklin-Direito-Criminal-2.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#2d2d2d] text-lg mb-2 inline-block px-4 py-2 rounded-full font-medium">
              Principais Áreas de Atuação
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#D8B354] mb-4">
              Serviços Jurídicos em Direito Criminal
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
                  style={{
                    backgroundImage: 'url("https://lbaadvocacia.com.br/wp-content/uploads/2025/12/Victor-Costa-2-scaled-1.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <summary className="cursor-pointer p-4 font-medium text-[#F7F7F7] bg-gradient-to-r from-[#D8B354]/90 to-[#C8A951]/90 hover:from-[#C8A951]/90 hover:to-[#D8B354]/90 transition-all duration-300 flex justify-between items-center">
                    <span className="text-sm">{faq.question}</span>
                    <span className="text-[#D8B354] text-xl">+</span>
                  </summary>
                  <div className="p-4 bg-white/95 text-[#414141] text-sm leading-relaxed">
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

export default DireitoCriminal
