import { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import PageHeader from '../components/PageHeader.jsx'
import Seo from '../components/Seo.jsx'
import { faq, waLink } from '../data/site.js'
import { useT } from '../i18n/LanguageProvider.jsx'
import './Faq.css'

export default function Faq() {
  const { t, pick } = useT()
  const [open, setOpen] = useState(0)
  return (
    <>
      <Seo
        title={t('faq.title')}
        description="Dúvidas frequentes sobre a Pousada Casa Florinda: localização, reservas, café da manhã, check-in e check-out."
        image="pousada-05.webp"
        path="/faq"
      />
      <PageHeader
        eyebrow={t('faq.eyebrow')}
        title={t('faq.title')}
        subtitle={t('faq.sub')}
        image="pousada-05.webp"
      />

      <section className="section">
        <div className="container faq">
          <ul className="faq__list">
            {faq.map((item, i) => {
              const isOpen = open === i
              return (
                <li key={i} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    className="faq__q"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-resp-${i}`}
                    id={`faq-q-${i}`}
                  >
                    <span>{pick(item, 'pergunta')}</span>
                    {isOpen ? <FiMinus aria-hidden="true" /> : <FiPlus aria-hidden="true" />}
                  </button>
                  <div
                    id={`faq-resp-${i}`}
                    className="faq__a"
                    role="region"
                    aria-labelledby={`faq-q-${i}`}
                    style={{ maxHeight: isOpen ? '300px' : '0' }}
                  >
                    <p>{pick(item, 'resposta')}</p>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="faq__cta">
            <p>{t('faq.ctaP')}</p>
            <a href={waLink('Olá! Tenho uma dúvida sobre a Pousada Casa Florinda.')} target="_blank" rel="noreferrer" className="btn btn-primary">
              <FaWhatsapp /> {t('common.falarWhats')}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
