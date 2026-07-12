import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import { depoimentos, site } from '../data/site.js'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <section className="section section-olive tst">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Depoimentos</span>
          <h2 className="section-title">O que nossos hóspedes dizem</h2>
          <hr className="divider" />
          <p style={{ color: 'rgba(245,241,232,0.8)' }}>
            Experiências reais de quem já se hospedou com a gente e com a nossa anfitriã {site.anfitria}.
          </p>
        </div>

        <Swiper
          className="tst__swiper"
          modules={[Autoplay, Pagination]}
          spaceBetween={28}
          loop
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }}
        >
          {depoimentos.map((d) => (
            <SwiperSlide key={d.nome}>
              <figure className="tst__card">
                <FaQuoteLeft className="tst__quote" />
                <div className="tst__stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <blockquote>{d.texto}</blockquote>
                <figcaption>
                  <strong>{d.nome}</strong>
                  <span>{d.local}</span>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
