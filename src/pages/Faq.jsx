import { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import PageHeader from '../components/PageHeader.jsx'
import { faq, site } from '../data/site.js'
import './Faq.css'

export default function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <>
      <PageHeader
        eyebrow="Dúvidas frequentes"
        title="FAQ"
        subtitle="Tudo o que você precisa saber para planejar a sua estada na Casa Florinda."
        image="pousada-05.webp"
      />

      <section className="section">
        <div className="container faq">
          <ul className="faq__list">
            {faq.map((item, i) => {
              const isOpen = open === i
              return (
                <li key={i} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                  <button className="faq__q" onClick={() => setOpen(isOpen ? -1 : i)}>
                    <span>{item.pergunta}</span>
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </button>
                  <div className="faq__a" style={{ maxHeight: isOpen ? '300px' : '0' }}>
                    <p>{item.resposta}</p>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="faq__cta">
            <p>Ainda tem dúvidas? Fale diretamente com a gente.</p>
            <a href={site.contato.whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary">
              <FaWhatsapp /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
