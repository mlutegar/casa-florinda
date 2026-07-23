import { useParams, Link, Navigate, useLocation } from 'react-router-dom'
import { FiUsers, FiHome, FiArrowLeft, FiCheck, FiClock } from 'react-icons/fi'
import { LuBath } from 'react-icons/lu'
import PageHeader from '../components/PageHeader.jsx'
import Gallery from '../components/Gallery.jsx'
import Seo from '../components/Seo.jsx'
import BookingForm from '../components/BookingForm.jsx'
import useReveal from '../hooks/useReveal.js'
import { acomodacoes, site } from '../data/site.js'
import { useT } from '../i18n/LanguageProvider.jsx'
import './Detalhe.css'

export default function AcomodacaoDetalhe() {
  const { t, pick, tp } = useT()
  const { slug } = useParams()
  const location = useLocation()
  const bookingInitial = location.state ?? {}
  const a = acomodacoes.find((x) => x.slug === slug)
  useReveal([slug])

  if (!a) return <Navigate to="/acomodacoes" replace />

  return (
    <>
      <Seo
        title={a.nome}
        description={pick(a, 'resumo')}
        image={a.capa}
        path={`/acomodacoes/${a.slug}`}
      />
      <PageHeader
        eyebrow={a.destaque ? t('common.favorito') : t('nav.acomodacoes')}
        title={a.nome}
        subtitle={pick(a, 'resumo')}
        image={a.capa}
      />

      <section className="section">
        <div className="container detalhe">
          <div className="detalhe__intro">
            <Link to="/acomodacoes" className="detalhe__back">
              <FiArrowLeft /> {t('acom.voltar')}
            </Link>

            <ul className="detalhe__specs">
              <li><FiHome /> {a.quartos} {t(a.quartos > 1 ? 'common.quartos' : 'common.quarto')}</li>
              <li><LuBath /> {a.banheiros} {t(a.banheiros > 1 ? 'common.banheiros' : 'common.banheiro')}</li>
              <li><FiUsers /> {t('common.ateHospedes', { n: a.hospedes })}</li>
            </ul>

            <p className="detalhe__desc">{pick(a, 'descricao')}</p>

            {a.comodidades?.length > 0 && (
              <div className="detalhe__block">
                <h3>{t('acom.comodidades')}</h3>
                <ul className="detalhe__amenities">
                  {a.comodidades.map((c) => (
                    <li key={c}><FiCheck /> {tp(c)}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="detalhe__block">
              <h3>{t('acom.horariosRegras')}</h3>
              <ul className="detalhe__rules">
                <li><FiClock /> {t('acom.checkin')}: {site.horarios.checkin}</li>
                <li><FiClock /> {t('acom.checkout')}: {site.horarios.checkout}</li>
                {(a.regras ?? site.regras).map((r) => (
                  <li key={r}><FiCheck /> {tp(r)}</li>
                ))}
              </ul>
            </div>

            <BookingForm acomodacao={a} initialValues={bookingInitial} />
          </div>

          <div className="detalhe__gallery reveal">
            <Gallery images={a.galeria} />
          </div>
        </div>
      </section>
    </>
  )
}
