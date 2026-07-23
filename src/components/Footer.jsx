import { Link } from 'react-router-dom'
import { FiMapPin, FiMail, FiPhone, FiInstagram } from 'react-icons/fi'
import Brand from './Brand.jsx'
import { site, waLink } from '../data/site.js'
import { useT } from '../i18n/LanguageProvider.jsx'
import './Footer.css'

export default function Footer() {
  const { t } = useT()
  const year = 2026
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__col footer__brand">
          <Brand variant="light" size="md" />
          <p className="footer__slogan">{t('footer.slogan')}</p>
          <div className="footer__social">
            <a
              href={site.contato.instagramLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="footer__social-link"
            >
              <FiInstagram />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>{t('footer.localizacao')}</h4>
          <p>
            <FiMapPin />{' '}
            <a href={site.contato.mapsLink} target="_blank" rel="noreferrer">
              {site.contato.localizacao}
            </a>
          </p>
        </div>

        <div className="footer__col">
          <h4>{t('footer.contato')}</h4>
          <p>
            <FiPhone />{' '}
            <a href={waLink('Olá!')} target="_blank" rel="noreferrer">
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
          <h4>{t('footer.menu')}</h4>
          <ul className="footer__links">
            <li><Link to="/">{t('nav.home')}</Link></li>
            <li><Link to="/acomodacoes">{t('nav.acomodacoes')}</Link></li>
            <li><Link to="/sobre-nos">{t('nav.sobre')}</Link></li>
            <li><Link to="/servicos">{t('nav.servicos')}</Link></li>
            <li><Link to="/contato">{t('nav.contato')}</Link></li>
            <li><Link to="/faq">{t('nav.faq')}</Link></li>
            <li><Link to="/politica-de-privacidade">{t('footer.privacidade')}</Link></li>
            <li><Link to="/termos">{t('footer.termos')}</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} {site.nome} — {t('footer.direitos')}</span>
          <a
            href={site.contato.instagramLink}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="footer__bottom-ig"
          >
            <FiInstagram />
          </a>
        </div>
      </div>
    </footer>
  )
}
