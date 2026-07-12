import { useParams, Link, Navigate } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import { FiUsers, FiHome, FiArrowLeft } from 'react-icons/fi'
import { LuBath } from 'react-icons/lu'
import PageHeader from '../components/PageHeader.jsx'
import Gallery from '../components/Gallery.jsx'
import useReveal from '../hooks/useReveal.js'
import { acomodacoes, site } from '../data/site.js'
import './Detalhe.css'

export default function AcomodacaoDetalhe() {
  const { slug } = useParams()
  const a = acomodacoes.find((x) => x.slug === slug)
  useReveal([slug])

  if (!a) return <Navigate to="/acomodacoes" replace />

  return (
    <>
      <PageHeader
        eyebrow={a.destaque ? 'Favorito dos hóspedes' : 'Acomodação'}
        title={a.nome}
        subtitle={a.resumo}
        image={a.capa}
      />

      <section className="section">
        <div className="container detalhe">
          <div className="detalhe__intro">
            <Link to="/acomodacoes" className="detalhe__back">
              <FiArrowLeft /> Todas as acomodações
            </Link>

            <ul className="detalhe__specs">
              <li><FiHome /> {a.quartos} {a.quartos > 1 ? 'quartos' : 'quarto'}</li>
              <li><LuBath /> {a.banheiros} {a.banheiros > 1 ? 'banheiros' : 'banheiro'}</li>
              <li><FiUsers /> até {a.hospedes} hóspedes</li>
            </ul>

            <p className="detalhe__desc">{a.descricao}</p>
            <p className="detalhe__preco">Preço sob consulta</p>
            <a href={site.contato.whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary">
              <FaWhatsapp /> Reservar via WhatsApp
            </a>
          </div>

          <div className="detalhe__gallery reveal">
            <Gallery images={a.galeria} />
          </div>
        </div>
      </section>
    </>
  )
}
