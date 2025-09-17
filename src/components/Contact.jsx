import { useState } from 'react'
import { Phone, Mail } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = 'Contato - Costa Franklin Advocacia'
    const body = `Nome: ${formData.name}\nTelefone: ${formData.phone}\n\nMensagem:\n${formData.message}`
    const mailtoLink = `mailto:contato@costafranklinadvogados.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoLink

    // Limpar o formulário após envio
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  return (
    <section id="contato" className="section-padding bg-gradient-to-br from-[var(--brand-muted)] to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto content-spacing">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] text-sm font-semibold tracking-wide uppercase mb-4">
            Contato
          </div>
          <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Precisa de <span className="text-[var(--brand-accent)]">ajuda jurídica</span>?
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Entre em contato conosco e descubra como podemos defender seus direitos e interesses.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h4 className="text-xl font-bold mb-4 text-gray-900">Informações de Contato</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center">
                    <Phone className="text-[var(--brand-accent)] w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telefone</p>
                    <a href="tel:+5521964782828" className="text-gray-600 hover:text-[var(--brand-accent)] transition">
                      (21) 96478-2828
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center">
                    <Mail className="text-[var(--brand-accent)] w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">E-mail</p>
                    <a href="mailto:contato@costafranklinadvogados.com.br" className="text-gray-600 hover:text-[var(--brand-accent)] transition break-all">
                      contato@costafranklinadvogados.com.br
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="https://wa.me/5521964782828" target="_blank" rel="noreferrer" className="pill px-4 sm:px-6 py-3 font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base" style={{background: 'linear-gradient(135deg, #d2ad36 0%, #c9a332 100%)', color: '#111'}}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </a>
                <a href="mailto:contato@costafranklinadvogados.com.br" className="pill px-4 sm:px-6 py-3 btn-secondary font-semibold flex items-center justify-center gap-2 text-sm sm:text-base">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  E-mail
                </a>
              </div>
            </div>
          </div>
          <form className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome*"
                className="rounded-xl border border-gray-200 px-4 py-3 focus:border-[var(--brand-accent)] focus:ring-2 focus:ring-[var(--brand-accent)]/20 transition"
              />
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Seu e-mail*"
                className="rounded-xl border border-gray-200 px-4 py-3 focus:border-[var(--brand-accent)] focus:ring-2 focus:ring-[var(--brand-accent)]/20 transition"
              />
            </div>
            <input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Telefone*"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-[var(--brand-accent)] focus:ring-2 focus:ring-[var(--brand-accent)]/20 transition"
            />
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Sua mensagem*"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 min-h-[120px] focus:border-[var(--brand-accent)] focus:ring-2 focus:ring-[var(--brand-accent)]/20 transition resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full rounded-xl px-6 py-4 bg-gradient-to-r from-[var(--brand-accent)] to-[#c9a332] text-black font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact