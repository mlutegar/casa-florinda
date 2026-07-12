import { Link } from 'react-router-dom'
import { FiUsers, FiHome } from 'react-icons/fi'
import { LuBath } from 'react-icons/lu'
import { img } from '../data/site.js'
import './AccommodationCard.css'

export default function AccommodationCard({ a }) {
  return (
    <article className="acard reveal">
      <Link to={`/acomodacoes/${a.slug}`} className="acard__media">
        <img src={img(a.capa)} alt={a.nome} loading="lazy" />
        {a.destaque && <span className="acard__badge">Favorito dos hóspedes</span>}
      </Link>
      <div className="acard__body">
        <h3>{a.nome}</h3>
        <ul className="acard__specs">
          <li><FiHome /> {a.quartos} {a.quartos > 1 ? 'quartos' : 'quarto'}</li>
          <li><LuBath /> {a.banheiros} {a.banheiros > 1 ? 'banheiros' : 'banheiro'}</li>
          <li><FiUsers /> {a.hospedes} {a.hospedes > 1 ? 'hóspedes' : 'hóspede'}</li>
        </ul>
        <p className="acard__resumo">{a.resumo}</p>
        <div className="acard__footer">
          <span className="acard__preco">Preço sob consulta</span>
          <Link to={`/acomodacoes/${a.slug}`} className="btn btn-outline">Saiba Mais</Link>
        </div>
      </div>
    </article>
  )
}
