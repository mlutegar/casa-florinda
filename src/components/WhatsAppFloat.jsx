import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { site } from '../data/site.js'
import './WhatsAppFloat.css'

export default function WhatsAppFloat() {
  return (
    <div className="social-float-group">
      <a
        className="social-float instagram-float"
        href={site.contato.instagramLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Siga-nos no Instagram"
      >
        <FaInstagram />
      </a>
      <a
        className="social-float wa-float"
        href={site.contato.whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Fale conosco no WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  )
}
