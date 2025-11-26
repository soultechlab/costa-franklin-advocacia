import { Shield, Scale, FileText, Search, Clipboard, Building, AlertCircle, CheckCircle, Wrench } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import Topbar from '../components/Topbar'

const RegistroMarcas = () => {
  const whatsappNumber = '5521964782828'
  const whatsappMessage = 'Olá! Vim pelo Google e gostaria de iniciar um atendimento com um especialista em Registro de Marcas.'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const benefits = [
    {
      icon: Shield,
      title: 'Sua Marca Merece Proteção',
      description: 'Muitos empreendedores só percebem a importância do registro quando já enfrentam problemas. Com orientação jurídica, você garante exclusividade e evita que terceiros se aproveitem do seu nome.'
    },
    {
      icon: Scale,
      title: 'Segurança Jurídica Para Seu Negócio',
      description: 'Sem o registro, qualquer empresa pode usar nome ou logo parecidos. O INPI garante exclusividade e protege sua marca.'
    },
    {
      icon: FileText,
      title: 'A Justiça Pode Defender Sua Marca',
      description: 'Se alguém tenta usar o que é seu, o registro permite agir rápido e de forma segura. Com assessoria especializada, é possível impedir usos indevidos e proteger seu negócio.'
    }
  ]

  const services = [
    {
      icon: Search,
      title: 'Busca de Anterioridade no INPI',
      description: 'Verificação completa para confirmar se a marca está disponível e evitar conflitos.'
    },
    {
      icon: Clipboard,
      title: 'Protocolo do Pedido de Registro',
      description: 'Preparação e envio de toda a documentação jurídica necessária.'
    },
    {
      icon: Building,
      title: 'Acompanhamento Integral do Processo',
      description: 'Monitoramento do pedido no INPI até a decisão final.'
    },
    {
      icon: AlertCircle,
      title: 'Resposta a Exigências do INPI',
      description: 'Atuação técnica quando o órgão solicita ajustes ou esclarecimentos.'
    },
    {
      icon: CheckCircle,
      title: 'Oposições e Defesas',
      description: 'Elaboração de manifestações contra pedidos de terceiros ou contra objeções.'
    },
    {
      icon: Wrench,
      title: 'Renovação e Manutenção do Registro',
      description: 'Gestão dos prazos de renovação e atualização da marca para evitar perda de direitos.'
    }
  ]

  const faqs = [
    {
      question: 'O que é uma marca e por que devo registrá-la?',
      answer: 'A marca é o sinal que identifica o seu produto, serviço ou empresa no mercado. O registro garante exclusividade de uso no Brasil e impede que terceiros utilizem nome ou logo iguais ou semelhantes.'
    },
    {
      question: 'Quanto tempo demora o processo de registro no INPI?',
      answer: 'O tempo médio varia entre 6 e 14 meses, dependendo da análise do INPI e da existência de oposições ou exigências.'
    },
    {
      question: 'Quais são os custos envolvidos para registrar uma marca?',
      answer: 'Existem taxas oficiais do INPI e os honorários do escritório. O valor final depende da categoria da marca e do tipo de cliente.'
    },
    {
      question: 'Posso usar minha marca antes do registro ser aprovado?',
      answer: 'Sim. Você pode usar normalmente. O registro, porém, é o que garante proteção legal e exclusividade.'
    },
    {
      question: 'Quais tipos de marcas podem ser registradas?',
      answer: 'É possível registrar nomes, logos, combinações de nome e logo, marcas figurativas, mistas e tridimensionais, desde que atendam às regras do INPI.'
    },
    {
      question: 'O que acontece se outra empresa registrar um nome igual ou parecido ao meu?',
      answer: 'A empresa que registrar primeiro terá prioridade. Você pode ser impedido de usar sua marca e até ser obrigado a mudar nome ou identidade visual.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFDF6] to-white">
      <Topbar />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1B1B1B] to-[#2d2d2d] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#D8B354] mb-6 leading-tight drop-shadow-lg">
              Proteja sua marca e garanta seus direitos no INPI
            </h1>
            <div className="w-32 h-1.5 bg-[#D8B354] mb-6"></div>
            <p className="text-white text-lg md:text-xl mb-8 leading-relaxed drop-shadow-md">
              Registrar a marca não é apenas um detalhe administrativo. É uma medida essencial para garantir segurança, exclusividade e blindagem contra concorrentes. Nosso escritório cuida de todo o processo com rigor técnico e acompanhamento contínuo.
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
                O escritório, liderado pelos Drs. <strong>Felipe Franklin</strong> e <strong>Victor Costa</strong>, é especializado na proteção jurídica de empresas e condomínios. A atuação abrange <strong>Direito Empresarial, Direito Condominial e Registro de Marcas</strong>, entregando suporte estratégico para quem busca segurança, organização e crescimento.
              </p>
              <p>
                A equipe trabalha com orientação preventiva, resolução eficiente de conflitos e estruturação jurídica completa para negócios e condomínios. No registro de marcas, oferece acompanhamento integral para garantir a proteção da identidade e dos direitos dos clientes perante o INPI.
              </p>
              <p>
                O atendimento se destaca pela clareza, objetividade e compromisso, sempre alinhado às necessidades específicas de cada cliente.
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
          backgroundImage: 'url("/images/services-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#2d2d2d] text-lg mb-2 inline-block px-4 py-2 rounded-full font-medium">
              Principais Áreas de Atuação
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#D8B354] mb-4">
              Serviços Jurídicos em Registro de Marca
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#2d2d2d] to-[#1B1B1B] p-8 rounded-3xl border-2 border-[#D8B354] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                  style={{
                    backgroundImage: 'url("/images/service-card-bg.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="relative z-10">
                    <Icon className="w-12 h-12 text-[#D8B354] mb-4" />
                    <h3 className="text-lg font-semibold text-[#D8B354] mb-3 leading-tight">
                      {service.title.split('<br>').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < service.title.split('<br>').length - 1 && <br />}
                        </span>
                      ))}
                    </h3>
                    <p className="text-white text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2d2d2d] text-center mb-4">
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

export default RegistroMarcas
