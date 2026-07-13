import { site } from '../data/site.js'
import './MapEmbed.css'

// Mapa do Google via embed (sem API key), buscando o endereço da pousada.
export default function MapEmbed({ height = 360 }) {
  const q = encodeURIComponent(site.contato.mapsQuery)
  return (
    <div className="mapembed" style={{ height }}>
      <iframe
        title="Localização da Pousada Casa Florinda"
        src={`https://maps.google.com/maps?q=${q}&z=14&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  )
}
