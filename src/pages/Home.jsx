import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import Hero from '../components/Hero.jsx'
import AccommodationCard from '../components/AccommodationCard.jsx'
import Testimonials from '../components/Testimonials.jsx'
import GalleryFilterable from '../components/GalleryFilterable.jsx'
import Img from '../components/Img.jsx'
import Seo from '../components/Seo.jsx'
import useReveal from '../hooks/useReveal.js'
import { acomodacoes, waReserva, img } from '../data/site.js'
import { useT } from '../i18n/LanguageProvider.jsx'
import './Home.css'

export default function Home() {
  const { t } = useT()
  useReveal()
  return (
    <>
      <Seo jsonLd="business" />
      <Hero />

      {/* Boas-vindas */}
      <section id="bem-vindo" className="section welcome">
        <div className="container welcome__grid">
          <div className="welcome__text reveal">
            <span className="eyebrow">{t('home.welcome.eyebrow')}</span>
            <h2 className="section-title">{t('home.welcome.title')}</h2>
            <hr className="divider" style={{ margin: '18px 0' }} />
            <p>{t('home.welcome.p1')}</p>
            <p>{t('home.welcome.p2')}</p>
            <Link to="/sobre-nos" className="btn btn-outline">{t('home.welcome.cta')}</Link>
          </div>
          <div className="welcome__media reveal">
            <Img name="pousada-05" alt="Interior aconchegante da Casa Florinda" sizes="(max-width: 860px) 100vw, 560px" />
            <span className="welcome__badge">{t('home.welcome.badge')}</span>
          </div>
        </div>
      </section>

      {/* Acomodações */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t('home.acom.eyebrow')}</span>
            <h2 className="section-title">{t('home.acom.title')}</h2>
            <hr className="divider" />
            <p>{t('home.acom.sub')}</p>
          </div>
          <div className="home-acoms">
            {acomodacoes.map((a) => (
              <AccommodationCard key={a.slug} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <Testimonials />

      {/* Galeria */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t('home.gal.eyebrow')}</span>
            <h2 className="section-title">{t('home.gal.title')}</h2>
            <hr className="divider" />
          </div>
          <GalleryFilterable />
        </div>
      </section>

      {/* CTA final */}
      <section className="cta" style={{ backgroundImage: `url(${img('pousada-03.webp')})` }}>
        <div className="cta__overlay" />
        <div className="container cta__content">
          <span className="eyebrow" style={{ color: 'var(--champanhe-light)' }}>{t('home.cta.eyebrow')}</span>
          <h2>{t('home.cta.title')}</h2>
          <p>{t('home.cta.sub')}</p>
          <a href={waReserva()} target="_blank" rel="noreferrer" className="btn btn-primary">
            <FaWhatsapp /> {t('nav.reservar')}
          </a>
        </div>
      </section>
    </>
  )
}
