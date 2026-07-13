import { FaWhatsapp } from 'react-icons/fa'
import { FiInfo } from 'react-icons/fi'
import PageHeader from '../components/PageHeader.jsx'
import Img from '../components/Img.jsx'
import Seo from '../components/Seo.jsx'
import useReveal from '../hooks/useReveal.js'
import { servicos, servicosAviso, servicosAviso_en, waLink, baseName } from '../data/site.js'
import { useT } from '../i18n/LanguageProvider.jsx'
import './Servicos.css'

export default function Servicos() {
  const { t, lang, pick } = useT()
  useReveal()
  return (
    <>
      <Seo
        title={t('serv.title')}
        description="Decoração romântica, cesta de café da manhã e tábua de frios com vinho. Experiências especiais na Pousada Casa Florinda, em Teresópolis/RJ."
        image="pousada-10.webp"
        path="/servicos"
      />
      <PageHeader
        eyebrow={t('serv.eyebrow')}
        title={t('serv.title')}
        subtitle={t('serv.sub')}
        image="pousada-10.webp"
      />

      <section className="section">
        <div className="container">
          <div className="servicos__grid">
            {servicos.map((s) => (
              <article className="servico reveal" key={s.titulo}>
                <div className="servico__media">
                  <Img name={baseName(s.imagem)} alt={pick(s, 'titulo')} sizes="(max-width: 900px) 100vw, 380px" />
                </div>
                <div className="servico__body">
                  <h3>{pick(s, 'titulo')}</h3>
                  <p>{pick(s, 'descricao')}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="servicos__aviso">
            <FiInfo />
            <p>{lang === 'en' ? servicosAviso_en : servicosAviso}</p>
          </div>

          <div className="servicos__cta">
            <a href={waLink('Olá! Gostaria de solicitar um dos pacotes de serviços.')} target="_blank" rel="noreferrer" className="btn btn-primary">
              <FaWhatsapp /> {t('serv.solicitar')}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
