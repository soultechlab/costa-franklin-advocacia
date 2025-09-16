import { MessageCircle } from 'lucide-react'

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5521964782828"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 pill shadow-lg px-4 py-4 bg-gradient-to-r from-[var(--brand-accent)] to-[#c9a332] hover:shadow-xl transition-all duration-300 hover:scale-110"
    >
      <MessageCircle className="w-6 h-6 text-black" />
    </a>
  )
}

export default WhatsAppButton