import PageHeader from '../components/PageHeader.jsx'
import AccommodationCard from '../components/AccommodationCard.jsx'
import useReveal from '../hooks/useReveal.js'
import { acomodacoes } from '../data/site.js'
import './Home.css'

export default function Acomodacoes() {
  useReveal()
  return (
    <>
      <PageHeader
        eyebrow="Nossas acomodações"
        title="Acomodações"
        subtitle="Suítes e chalés aconchegantes, cada um com seu charme, para uma estada inesquecível na serra."
        image="pousada-01.webp"
      />
      <section className="section">
        <div className="container">
          <div className="home-acoms">
            {acomodacoes.map((a) => (
              <AccommodationCard key={a.slug} a={a} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
