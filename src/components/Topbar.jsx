import { Phone, Mail, Facebook, Instagram } from 'lucide-react'

function Topbar() {
  return (
    <div className="hidden sm:block w-full text-xs sm:text-sm text-white/80 py-2 px-2 sm:px-4 border-b border-white/10" style={{backgroundColor: '#0f172a'}}>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <a className="hover:text-white flex items-center gap-1" href="tel:+5521964782828">
            <Phone size={12} className="sm:w-3.5 sm:h-3.5" />
            <span className="text-xs sm:text-sm">(21) 96478-2828</span>
          </a>
          <a className="hover:text-white flex items-center gap-1 break-all sm:break-normal" href="mailto:contato@costafranklinadvogados.com.br">
            <Mail size={12} className="sm:w-3.5 sm:h-3.5" />
            <span className="text-xs sm:text-sm">contato@costafranklinadvogados.com.br</span>
          </a>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-white/80 text-xs sm:text-sm hidden sm:inline">Siga-nos:</span>
          <a className="hover:text-white p-1 rounded-full hover:bg-white/10 transition" href="https://facebook.com" target="_blank" rel="noreferrer">
            <Facebook size={14} className="sm:w-4 sm:h-4" />
          </a>
          <a className="hover:text-white p-1 rounded-full hover:bg-white/10 transition" href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram size={14} className="sm:w-4 sm:h-4" />
          </a>
          <div className="w-px h-3 sm:h-4 bg-white/30 mx-1"></div>
          <a href="https://astrea.net.br/#/login/BR" target="_blank" rel="noreferrer" className="px-2 sm:px-3 py-1 text-xs font-medium btn-primary rounded-full">
            Área do Cliente
          </a>
        </div>
      </div>
    </div>
  )
}

export default Topbar