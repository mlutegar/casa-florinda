import { Link } from 'react-router-dom'
import { FiUsers, FiHome } from 'react-icons/fi'
import { LuBath } from 'react-icons/lu'
import Img from './Img.jsx'
import { baseName } from '../data/site.js'
import { useT } from '../i18n/LanguageProvider.jsx'
import { useCurrency } from '../i18n/CurrencyProvider.jsx'
import './AccommodationCard.css'

export default function AccommodationCard({ a }) {
  const { t } = useT()
  const { formatPrice } = useCurrency()
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
        <div className="acard__footer">
          {a.preco ? (
            <div className="acard__preco-wrap">
              <span className="acard__preco-label">{t('common.apartirDe')}</span>
              <span className="acard__preco-valor">{formatPrice(a.preco)}</span>
              <span className="acard__preco-nota">/ {t('common.noite')}</span>
            </div>
          ) : (
            <span className="acard__preco">{t('common.precoConsulta')}</span>
          )}
          <Link to={`/acomodacoes/${a.slug}`} className="btn btn-outline">{t('common.saibaMais')}</Link>
        </div>
      </div>
    </article>
  )
}
