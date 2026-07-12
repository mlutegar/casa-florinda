import { FaWhatsapp } from 'react-icons/fa'
import { site } from '../data/site.js'
import './WhatsAppFloat.css'

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={site.contato.whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp />
    </a>
  )
}
