import './Brand.css'
import { site } from '../data/site.js'

// Wordmark "Casa Florinda": "Casa" em serifada, "Florinda" em script.
export default function Brand({ variant = 'dark', size = 'md' }) {
  return (
    <span className={`brand brand--${variant} brand--${size}`} aria-label={site.nome}>
      <span className="brand__casa">{site.nomePrimeiro}</span>
      <span className="brand__florinda">{site.nomeSegundo}</span>
    </span>
  )
}
