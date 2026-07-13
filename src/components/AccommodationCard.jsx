import { Link } from 'react-router-dom'
import { FiUsers, FiHome } from 'react-icons/fi'
import { LuBath } from 'react-icons/lu'
import Img from './Img.jsx'
import { baseName } from '../data/site.js'
import { useT } from '../i18n/LanguageProvider.jsx'
import './AccommodationCard.css'

export default function AccommodationCard({ a }) {
  const { t, pick } = useT()
  return (
    <article className="acard reveal">
      <Link to={`/acomodacoes/${a.slug}`} className="acard__media">
        <Img name={baseName(a.capa)} alt={a.nome} sizes="(max-width: 640px) 100vw, 380px" />
        {a.destaque && <span className="acard__badge">{t('common.favorito')}</span>}
      </Link>
      <div className="acard__body">
        <h3>{a.nome}</h3>
        <ul className="acard__specs">
          <li><FiHome /> {a.quartos} {t(a.quartos > 1 ? 'common.quartos' : 'common.quarto')}</li>
          <li><LuBath /> {a.banheiros} {t(a.banheiros > 1 ? 'common.banheiros' : 'common.banheiro')}</li>
          <li><FiUsers /> {a.hospedes} {t(a.hospedes > 1 ? 'common.hospedes' : 'common.hospede')}</li>
        </ul>
        <p className="acard__resumo">{pick(a, 'resumo')}</p>
        <div className="acard__footer">
          <span className="acard__preco">{t('common.precoConsulta')}</span>
          <Link to={`/acomodacoes/${a.slug}`} className="btn btn-outline">{t('common.saibaMais')}</Link>
        </div>
      </div>
    </article>
  )
}
