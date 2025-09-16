import { useState } from 'react'

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
    alert('Obrigado! Sua mensagem foi enviada.')
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
                    <span className="text-[var(--brand-accent)] font-bold">☎</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telefone</p>
                    <a href="tel:+5521997627530" className="text-gray-600 hover:text-[var(--brand-accent)] transition">
                      (21) 99762-7530
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center">
                    <span className="text-[var(--brand-accent)] font-bold">@</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">E-mail</p>
                    <a href="mailto:contato@costafranklinadvocacia.com.br" className="text-gray-600 hover:text-[var(--brand-accent)] transition break-all">
                      contato@costafranklinadvocacia.com.br
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex gap-4 flex-wrap">
                <a href="https://wa.me/5521997627530" target="_blank" rel="noreferrer" className="pill px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 font-semibold transition-all duration-300">
                  WhatsApp
                </a>
                <a href="mailto:contato@costafranklinadvocacia.com.br" className="pill px-6 py-3 btn-secondary font-semibold">
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