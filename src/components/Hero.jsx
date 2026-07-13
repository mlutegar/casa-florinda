import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { FaWhatsapp } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'
import Brand from './Brand.jsx'
import { waReserva, img } from '../data/site.js'
import { useT } from '../i18n/LanguageProvider.jsx'
import './Hero.css'

const slides = [
  'pousada-02.webp',
  'pousada-03.webp',
  'pousada-01.webp',
  'pousada-05.webp',
  'pousada-04.webp',
]

export default function Hero() {
  const { t } = useT()
  return (
    <section className="hero">
      <Swiper
        className="hero__swiper"
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1400}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {slides.map((s, i) => (
          <SwiperSlide key={s}>
            <div
              className="hero__slide"
              style={{ backgroundImage: `url(${img(s)})` }}
              role="img"
              aria-label={`Foto ${i + 1} da Pousada Casa Florinda`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hero__overlay" />

      <div className="hero__content">
        <span className="hero__eyebrow">{t('hero.tagline')}</span>
        <Brand variant="light" size="lg" />
        <p className="hero__sub">{t('hero.slogan')}</p>
        <a href={waReserva()} target="_blank" rel="noreferrer" className="btn btn-primary hero__btn">
          <FaWhatsapp /> {t('nav.reservar')}
        </a>
      </div>

      <a href="#bem-vindo" className="hero__scroll" aria-label="Rolar para baixo">
        <FiChevronDown />
      </a>
    </section>
  )
}
