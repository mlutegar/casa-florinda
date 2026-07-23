import { Link } from 'react-router-dom'
import { FiCheckCircle } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import Seo from '../components/Seo.jsx'
import { site } from '../data/site.js'
import './BookingStatus.css'

export default function BookingConfirmacao() {
  return (
    <>
      <Seo title="Reserva Confirmada!" description="Sua reserva na Pousada Casa Florinda foi confirmada com sucesso." />
      <section className="booking-status section">
        <div className="container booking-status__inner">
          <FiCheckCircle className="booking-status__icon booking-status__icon--ok" />
          <h1 className="booking-status__titulo">Reserva Confirmada!</h1>
          <p className="booking-status__texto">
            Seu pagamento foi aprovado. Em breve você receberá um e-mail de confirmação com todos
            os detalhes da sua estada na Pousada Casa Florinda.
          </p>
          <p className="booking-status__texto">
            Check-in: <strong>15:00 – 20:00</strong> · Check-out: <strong>09:00 – 12:00</strong>
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
