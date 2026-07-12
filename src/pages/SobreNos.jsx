import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import PageHeader from '../components/PageHeader.jsx'
import useReveal from '../hooks/useReveal.js'
import { site, img } from '../data/site.js'
import './Conteudo.css'

export default function SobreNos() {
  useReveal()
  return (
    <>
      <PageHeader
        eyebrow="Sobre nós"
        title="Nossa história"
        subtitle="Um refúgio de tranquilidade cercado pela Mata Atlântica, em Teresópolis."
        image="pousada-02.webp"
      />

      <section className="section">
        <div className="container conteudo__grid">
          <div className="conteudo__media reveal">
            <img src={img('pousada-04.webp')} alt="Entrada da Pousada Casa Florinda" loading="lazy" />
          </div>
          <div className="conteudo__text reveal">
            <span className="eyebrow">Bem-vindo</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Cara de casa, conforto de pousada
            </h2>
            <hr className="divider" style={{ margin: '18px 0' }} />
            <p>
              A Pousada Casa Florinda fica no Parque Imbuí, em Teresópolis – RJ, um refúgio
              de tranquilidade cercado pela Mata Atlântica, com ruas arborizadas e o canto
              de pássaros como tucanos, saíras e bem-te-vis.
            </p>
            <p>
              O bairro oferece um ambiente fresco, ar puro e vistas deslumbrantes das
              montanhas, criando um cenário perfeito para quem busca contato com a natureza
              e momentos de paz — e tudo isso a poucos minutos do centro.
            </p>
            <p>
              Cada detalhe é cuidado com carinho pela nossa anfitriã, {site.anfitria}, sempre
              atenciosa e disposta a tornar a sua estada uma experiência única. Não à toa,
              nossos hóspedes se sentem em casa desde o primeiro momento.
            </p>
            <div className="conteudo__actions">
              <Link to="/acomodacoes" className="btn btn-outline">Ver acomodações</Link>
              <a href={site.contato.whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary">
                <FaWhatsapp /> Fale conosco
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-olive valores">
        <div className="container">
          <div className="valores__grid">
            <div className="valores__item">
              <h3>Natureza</h3>
              <p>Imersão total na Mata Atlântica, com ar puro e vista para as montanhas.</p>
            </div>
            <div className="valores__item">
              <h3>Aconchego</h3>
              <p>Ambientes acolhedores, limpos e cheios de charme, pensados para o seu descanso.</p>
            </div>
            <div className="valores__item">
              <h3>Atendimento</h3>
              <p>Hospitalidade de verdade, com uma anfitriã sempre à disposição.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
