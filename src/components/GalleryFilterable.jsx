import { useMemo, useState } from 'react'
import Gallery from './Gallery.jsx'
import { galeria, galeriaCategorias } from '../data/site.js'
import { useT } from '../i18n/LanguageProvider.jsx'
import './GalleryFilterable.css'

export default function GalleryFilterable() {
  const { pick } = useT()
  const [cat, setCat] = useState('todas')

  const images = useMemo(
    () => galeria.filter((g) => cat === 'todas' || g.categoria === cat).map((g) => g.file),
    [cat],
  )

  return (
    <div className="galfilter">
      <div className="galfilter__tabs">
        {galeriaCategorias.map((c) => (
          <button
            key={c.id}
            className={`galfilter__tab ${cat === c.id ? 'is-active' : ''}`}
            onClick={() => setCat(c.id)}
          >
            {pick(c, 'label')}
          </button>
        ))}
      </div>
      <Gallery key={cat} images={images} />
    </div>
  )
}
