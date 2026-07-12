import { img } from '../data/site.js'
import './PageHeader.css'

export default function PageHeader({ eyebrow, title, subtitle, image = 'pousada-03.webp' }) {
  return (
    <header className="pagehead" style={{ backgroundImage: `url(${img(image)})` }}>
      <div className="pagehead__overlay" />
      <div className="pagehead__content container">
        {eyebrow && <span className="pagehead__eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </header>
  )
}
