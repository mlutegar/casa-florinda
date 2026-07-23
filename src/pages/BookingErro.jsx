import { Link } from 'react-router-dom'
import { FiXCircle } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import Seo from '../components/Seo.jsx'
import { site } from '../data/site.js'
import './BookingStatus.css'

export default function BookingErro() {
  return (
    <>
      <Seo title="Erro no Pagamento" description="Ocorreu um problema ao processar seu pagamento." />
      <section className="booking-status section">
        <div className="container booking-status__inner">
          <FiXCircle className="booking-status__icon booking-status__icon--erro" />
          <h1 className="booking-status__titulo">Problema no Pagamento</h1>
          <p className="booking-status__texto">
            Não foi possível processar seu pagamento. Isso pode ter ocorrido por dados incorretos,
            limite no cartão ou instabilidade temporária.
          </p>
          <p className="booking-status__texto">
            Você pode tentar novamente ou entrar em contato com a Cida para reservar pelo WhatsApp.
          </p>

          <Link to="/acomodacoes" className="btn btn-primary booking-status__btn">
            Tentar novamente
          </Link>
          <a
            href={site.contato.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="booking-status__home"
            style={{ color: '#25d366', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <FaWhatsapp /> Reservar pelo WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
