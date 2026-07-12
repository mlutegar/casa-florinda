import { Link } from 'react-router-dom'
import { FiMapPin, FiMail, FiPhone, FiInstagram } from 'react-icons/fi'
import Brand from './Brand.jsx'
import { site } from '../data/site.js'
import './Footer.css'

export default function Footer() {
  const year = 2025
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__col footer__brand">
          <Brand variant="light" size="md" />
          <p>{site.slogan}</p>
        </div>

        <div className="footer__col">
          <h4>Localização</h4>
          <p>
            <FiMapPin />{' '}
            <a href={site.contato.mapsLink} target="_blank" rel="noreferrer">
              {site.contato.localizacao}
            </a>
          </p>
        </div>

        <div className="footer__col">
          <h4>Contato</h4>
          <p>
            <FiPhone />{' '}
            <a href={site.contato.whatsappLink} target="_blank" rel="noreferrer">
              {site.contato.whatsapp}
            </a>
          </p>
          <p>
            <FiMail /> <a href={`mailto:${site.contato.email}`}>{site.contato.email}</a>
          </p>
          <p>
            <FiInstagram />{' '}
            <a href={site.contato.instagramLink} target="_blank" rel="noreferrer">
              {site.contato.instagram}
            </a>
          </p>
        </div>

        <div className="footer__col">
          <h4>Menu</h4>
          <ul className="footer__links">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/acomodacoes">Acomodações</Link></li>
            <li><Link to="/sobre-nos">Sobre Nós</Link></li>
            <li><Link to="/servicos">Serviços</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          © {year} {site.nome} — Pousada em Teresópolis/RJ. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
