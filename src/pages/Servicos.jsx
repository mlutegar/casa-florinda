import { FaWhatsapp } from 'react-icons/fa'
import { FiInfo } from 'react-icons/fi'
import PageHeader from '../components/PageHeader.jsx'
import useReveal from '../hooks/useReveal.js'
import { servicos, servicosAviso, site, img } from '../data/site.js'
import './Servicos.css'

export default function Servicos() {
  useReveal()
  return (
    <>
      <PageHeader
        eyebrow="Consulte nossos pacotes"
        title="Serviços"
        subtitle="Experiências especiais para tornar a sua estada ainda mais memorável."
        image="pousada-10.webp"
      />

      <section className="section">
        <div className="container">
          <div className="servicos__grid">
            {servicos.map((s) => (
              <article className="servico reveal" key={s.titulo}>
                <div className="servico__media">
                  <img src={img(s.imagem)} alt={s.titulo} loading="lazy" />
                </div>
                <div className="servico__body">
                  <h3>{s.titulo}</h3>
                  <p>{s.descricao}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="servicos__aviso">
            <FiInfo />
            <p>{servicosAviso}</p>
          </div>

          <div className="servicos__cta">
            <a href={site.contato.whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary">
              <FaWhatsapp /> Solicitar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
