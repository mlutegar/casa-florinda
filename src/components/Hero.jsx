import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { FiChevronDown } from 'react-icons/fi'
import { img } from '../data/site.js'
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
        <h1 className="hero__title">{t('hero.tagline')}</h1>
        <p className="hero__sub">{t('hero.slogan')}</p>
      </div>

      <button
        type="button"
        className="hero__scroll"
        aria-label="Rolar para baixo"
        onClick={() =>
          document.getElementById('bem-vindo')?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        <FiChevronDown />
      </button>
    </section>
  )
}
