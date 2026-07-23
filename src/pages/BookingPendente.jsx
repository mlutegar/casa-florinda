import { Link } from 'react-router-dom'
import { FiClock } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import Seo from '../components/Seo.jsx'
import { site } from '../data/site.js'
import './BookingStatus.css'

export default function BookingPendente() {
  return (
    <>
      <Seo title="Pagamento Pendente" description="Seu pagamento está sendo processado. Aguarde a confirmação." />
      <section className="booking-status section">
        <div className="container booking-status__inner">
          <FiClock className="booking-status__icon booking-status__icon--pending" />
          <h1 className="booking-status__titulo">Pagamento Pendente</h1>
          <p className="booking-status__texto">
            Seu pagamento está sendo processado. Isso pode levar alguns minutos (PIX) ou até o próximo
            dia útil (boleto). Assim que confirmarmos, você receberá um e-mail.
          </p>
          <p className="booking-status__texto">
            Se tiver dúvidas, entre em contato diretamente com a Cida pelo WhatsApp.
          </p>

          <a
            href={site.contato.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary booking-status__btn"
          >
            <FaWhatsapp /> Falar com a Cida
          </a>
          <Link to="/" className="booking-status__home">
            Voltar ao início
          </Link>
        </div>
      </section>
    </>
  )
}
