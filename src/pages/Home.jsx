import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import Hero from '../components/Hero.jsx'
import AccommodationCard from '../components/AccommodationCard.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Gallery from '../components/Gallery.jsx'
import useReveal from '../hooks/useReveal.js'
import { site, acomodacoes, img } from '../data/site.js'
import './Home.css'

const galleryImages = [
  'pousada-01.webp', 'pousada-05.webp', 'pousada-03.webp', 'pousada-08.webp',
  'pousada-07.webp', 'pousada-02.webp', 'pousada-06.webp', 'pousada-10.webp',
  'pousada-09.webp',
]

export default function Home() {
  useReveal()
  return (
    <>
      <Hero />

      {/* Boas-vindas */}
      <section id="bem-vindo" className="section welcome">
        <div className="container welcome__grid">
          <div className="welcome__text reveal">
            <span className="eyebrow">{site.tagline}</span>
            <h2 className="section-title">Bem-vindo à Casa Florinda</h2>
            <hr className="divider" style={{ margin: '18px 0' }} />
            <p>
              Em um mundo onde a vida é uma corrida incessante, você merece uma pausa.
              Imagine-se cercado pela serenidade das montanhas, pelo canto dos pássaros e
              pelo ar puro da Mata Atlântica.
            </p>
            <p>
              No Parque Imbuí, em Teresópolis, a Casa Florinda é o seu santuário de
              tranquilidade — um refúgio com cara de casa e o conforto de uma pousada,
              cuidado em cada detalhe pela nossa anfitriã {site.anfitria}.
            </p>
            <Link to="/sobre-nos" className="btn btn-outline">Conheça nossa história</Link>
          </div>
          <div className="welcome__media reveal">
            <img src={img('pousada-05.webp')} alt="Interior aconchegante da Casa Florinda" loading="lazy" />
            <span className="welcome__badge">Onde o descanso encontra a natureza</span>
          </div>
        </div>
      </section>

      {/* Acomodações */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Nossas acomodações</span>
            <h2 className="section-title">Escolha o seu refúgio</h2>
            <hr className="divider" />
            <p>
              Suítes e chalés aconchegantes com vista para as montanhas, incluindo opções
              com hidromassagem e o favorito dos hóspedes: o charmoso Chalé das Flores.
            </p>
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
            <span className="eyebrow">Galeria</span>
            <h2 className="section-title">Momentos na serra</h2>
            <hr className="divider" />
          </div>
          <Gallery images={galleryImages} />
        </div>
      </section>

      {/* CTA final */}
      <section className="cta" style={{ backgroundImage: `url(${img('pousada-03.webp')})` }}>
        <div className="cta__overlay" />
        <div className="container cta__content">
          <span className="eyebrow" style={{ color: 'var(--champanhe-light)' }}>Reserve sua experiência</span>
          <h2>Viva momentos únicos na Casa Florinda</h2>
          <p>Consulte disponibilidade e valores diretamente com a gente pelo WhatsApp.</p>
          <a href={site.contato.whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary">
            <FaWhatsapp /> Reserve Já
          </a>
        </div>
      </section>
    </>
  )
}
