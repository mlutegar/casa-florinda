import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import PageHeader from '../components/PageHeader.jsx'
import Img from '../components/Img.jsx'
import Seo from '../components/Seo.jsx'
import useReveal from '../hooks/useReveal.js'
import { waLink } from '../data/site.js'
import { useT } from '../i18n/LanguageProvider.jsx'
import './Conteudo.css'

export default function SobreNos() {
  const { t } = useT()
  useReveal()
  return (
    <>
      <Seo
        title={t('sobre.title')}
        description="Conheça a Pousada Casa Florinda, no Parque Imbuí, Teresópolis/RJ — um refúgio cercado pela Mata Atlântica, com a hospitalidade da anfitriã Cida."
        image="pousada-02.webp"
        path="/sobre-nos"
      />
      <PageHeader
        eyebrow={t('sobre.eyebrow')}
        title={t('sobre.title')}
        subtitle={t('sobre.sub')}
        image="pousada-02.webp"
      />

      <section className="section">
        <div className="container conteudo__grid">
          <div className="conteudo__media reveal">
            <Img name="pousada-04" alt="Entrada da Pousada Casa Florinda" sizes="(max-width: 860px) 100vw, 560px" />
          </div>
          <div className="conteudo__text reveal">
            <span className="eyebrow">{t('sobre.welcome')}</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>{t('sobre.h2')}</h2>
            <hr className="divider" style={{ margin: '18px 0' }} />
            <p>{t('sobre.p1')}</p>
            <p>{t('sobre.p2')}</p>
            <p>{t('sobre.p3')}</p>
            <div className="conteudo__actions">
              <Link to="/acomodacoes" className="btn btn-outline">{t('sobre.verAcom')}</Link>
              <a href={waLink('Olá! Gostaria de mais informações.')} target="_blank" rel="noreferrer" className="btn btn-primary">
                <FaWhatsapp /> {t('sobre.falar')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-olive valores">
        <div className="container">
          <div className="valores__grid">
            <div className="valores__item">
              <h3>{t('sobre.v1.t')}</h3>
              <p>{t('sobre.v1.p')}</p>
            </div>
            <div className="valores__item">
              <h3>{t('sobre.v2.t')}</h3>
              <p>{t('sobre.v2.p')}</p>
            </div>
            <div className="valores__item">
              <h3>{t('sobre.v3.t')}</h3>
              <p>{t('sobre.v3.p')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
