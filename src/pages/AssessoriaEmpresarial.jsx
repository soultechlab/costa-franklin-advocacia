import { useState } from "react";
import {
  Briefcase,
  FileCheck,
  Shield,
  Users,
  TrendingUp,
  Scale,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Topbar from "../components/Topbar";
import { trackWhatsAppConversion } from "../utils/analytics";

const AssessoriaEmpresarial = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const whatsappNumber = "5521964782828";
  const whatsappMessage =
    "Olá! Vim pelo Google e gostaria de iniciar um atendimento com um especialista em Assessoria Empresarial.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const benefits = [
    {
      icon: Shield,
      title: "Segurança Jurídica Para Sua Empresa",
      description:
        "Proteção legal completa para todas as operações do seu negócio, minimizando riscos e garantindo conformidade.",
    },
    {
      icon: FileCheck,
      title: "Contratos Estratégicos",
      description:
        "Elaboração e revisão de contratos comerciais que protegem seus interesses e fortalecem suas relações empresariais.",
    },
    {
      icon: TrendingUp,
      title: "Crescimento Com Conformidade",
      description:
        "Estruturação jurídica adequada para permitir o crescimento sustentável e seguro do seu negócio.",
    },
  ];

  const services = [
    {
      icon: FileCheck,
      title: "Elaboração e Revisão de Contratos",
      description:
        "Contratos comerciais, prestação de serviços, fornecimento, distribuição, parcerias e demais instrumentos contratuais.",
    },
    {
      icon: Briefcase,
      title: "Consultoria em Compliance Corporativo",
      description:
        "Implementação de políticas de conformidade, código de conduta e programas de integridade empresarial.",
    },
    {
      icon: Users,
      title: "Direito Societário",
      description:
        "Constituição de empresas, alterações contratuais, entrada e saída de sócios, e dissolução societária.",
    },
    {
      icon: Scale,
      title: "Recuperação de Crédito Empresarial",
      description:
        "Cobrança judicial e extrajudicial de valores inadimplidos por clientes e parceiros comerciais.",
    },
    {
      icon: Shield,
      title: "Defesa em Demandas Judiciais",
      description:
        "Representação em ações trabalhistas, cíveis, comerciais e administrativas que envolvam a empresa.",
    },
    {
      icon: TrendingUp,
      title: "Planejamento Jurídico Estratégico",
      description:
        "Consultoria preventiva para tomada de decisões estratégicas e mitigação de riscos empresariais.",
    },
  ];

  const faqs = [
    {
      question: "O que é assessoria jurídica empresarial?",
      answer:
        "É o serviço de consultoria e representação legal prestado às empresas, abrangendo contratos, compliance, questões societárias, trabalhistas e demandas judiciais, com foco na proteção do negócio.",
    },
    {
      question: "Minha empresa precisa de um advogado fixo?",
      answer:
        "Embora não seja obrigatório, contar com assessoria jurídica regular evita problemas, garante conformidade legal e permite respostas rápidas a questões que surgem no dia a dia empresarial.",
    },
    {
      question: "Como funciona a revisão de contratos?",
      answer:
        "Analisamos cláusulas, identificamos riscos, sugerimos ajustes e garantimos que o contrato proteja adequadamente os interesses da sua empresa antes da assinatura.",
    },
    {
      question: "O que é compliance corporativo?",
      answer:
        "É o conjunto de práticas e políticas para garantir que a empresa atue em conformidade com leis e regulamentos, incluindo código de conduta, prevenção à corrupção e gestão de riscos.",
    },
    {
      question: "Como recuperar créditos de clientes inadimplentes?",
      answer:
        "Iniciamos com negociação extrajudicial. Se não houver acordo, ajuizamos ação de cobrança ou execução de título para recuperar os valores devidos, com juros e correção.",
    },
    {
      question: "Qual a diferença entre consultoria preventiva e contenciosa?",
      answer:
        "A consultoria preventiva evita problemas antes que ocorram, por meio de orientação contínua. A contenciosa envolve resolução de conflitos já instalados, como processos judiciais.",
    },
  ];

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
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1920&auto=format&fit=crop)",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#D8B354] mb-6 leading-tight drop-shadow-lg">
              Assesoria e Consultoria jurídica estratégica para o crescimento do seu negócio
            </h1>
            <div className="w-32 h-1.5 bg-[#D8B354] mb-6"></div>
            <p className="text-white text-lg md:text-xl mb-8 leading-relaxed drop-shadow-md">
              Proteja sua empresa com assessoria jurídica especializada.
              Contratos seguros, compliance corporativo e suporte completo para
              todas as operações do seu negócio.
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
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-b from-white to-[#F7F7F7] p-8 rounded-3xl border-2 border-[#4E4E4E] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                  style={{
                    backgroundImage: 'url("/images/card-bg.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-[#F7F7F7]/95"></div>
                  <div className="relative z-10">
                    <Icon className="w-12 h-12 text-[#D8B354] mb-4" />
                    <h3 className="text-xl font-semibold text-[#2d2d2d] mb-3 leading-tight">
                      {benefit.title.split("<br>").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < benefit.title.split("<br>").length - 1 && <br />}
                        </span>
                      ))}
                    </h3>
                    <p className="text-[#4a4a4a] text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
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
                O escritório, liderado pelos Drs.{" "}
                <strong>Felipe Franklin</strong> e <strong>Victor Costa</strong>
                , é especializado em <strong>assessoria empresarial</strong>,
                oferecendo suporte jurídico completo para empresas de todos os
                portes e segmentos.
              </p>
              <p>
                Nossa atuação abrange{" "}
                <strong>elaboração e revisão de contratos comerciais</strong>,{" "}
                <strong>compliance corporativo</strong>,{" "}
                <strong>direito societário</strong>,{" "}
                <strong>recuperação de crédito empresarial</strong>,{" "}
                <strong>defesa em demandas judiciais</strong> e{" "}
                <strong>planejamento jurídico estratégico</strong> para apoiar o
                crescimento sustentável do seu negócio.
              </p>
              <p>
                Trabalhamos com orientação preventiva e resolutiva, oferecendo
                soluções práticas e eficientes para os desafios jurídicos que
                empresas enfrentam diariamente. Nossa abordagem é{" "}
                <strong>técnica, estratégica e proativa</strong>, sempre focada
                na proteção dos interesses empresariais e na mitigação de
                riscos.
              </p>
              <p>
                <strong>Fale com um especialista</strong> e conte com uma
                assessoria jurídica sólida, ética e comprometida com o sucesso
                do seu negócio.
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
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#2d2d2d] text-lg mb-2 inline-block px-4 py-2 rounded-full font-medium">
              Principais Áreas de Atuação
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#D8B354] mb-4">
              Serviços Jurídicos em Assessoria Empresarial
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl border-2 border-[#D8B354] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <Icon className="w-12 h-12 text-[#D8B354] mb-4" />
                  <h3 className="text-lg font-semibold text-[#D8B354] mb-3 leading-tight">
                    {service.title.split("<br>").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < service.title.split("<br>").length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                  <p className="text-[#0f172a] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
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
  );
};

export default AssessoriaEmpresarial;
