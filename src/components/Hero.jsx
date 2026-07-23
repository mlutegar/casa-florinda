import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { FiChevronDown } from 'react-icons/fi'
import { img, heroSlides } from '../data/site.js'
import { useT } from '../i18n/LanguageProvider.jsx'
import './Hero.css'

export default function Hero() {
  const { t } = useT()
  return (
    <section className="hero">
      <div aria-live="polite" aria-atomic="false" className="sr-only" />
      <Swiper
        className="hero__swiper"
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1400}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {heroSlides.map((s, i) => (
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
        <h1 className="hero__title">
          <span className="hero__title-pre">{t('hero.title.pre')}</span>
          <span className="hero__title-name">{t('hero.title.name')}</span>
        </h1>
        <div className="hero__divider" aria-hidden="true" />
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
