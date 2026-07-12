import { useState, useCallback, useEffect } from 'react'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { img } from '../data/site.js'
import './Gallery.css'

export default function Gallery({ images }) {
  const [index, setIndex] = useState(-1)
  const open = index >= 0

  const close = useCallback(() => setIndex(-1), [])
  const prev = useCallback(
    (e) => {
      e?.stopPropagation()
      setIndex((i) => (i - 1 + images.length) % images.length)
    },
    [images.length],
  )
  const next = useCallback(
    (e) => {
      e?.stopPropagation()
      setIndex((i) => (i + 1) % images.length)
    },
    [images.length],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, close, prev, next])

  return (
    <>
      <div className="gallery">
        {images.map((src, i) => (
          <button className="gallery__item" key={src + i} onClick={() => setIndex(i)}>
            <img src={img(src)} alt={`Galeria Casa Florinda ${i + 1}`} loading="lazy" />
          </button>
        ))}
      </div>

      {open && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
          <button className="lightbox__close" onClick={close} aria-label="Fechar">
            <FiX />
          </button>
          <button className="lightbox__nav lightbox__prev" onClick={prev} aria-label="Anterior">
            <FiChevronLeft />
          </button>
          <img
            className="lightbox__img"
            src={img(images[index])}
            alt={`Foto ${index + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox__nav lightbox__next" onClick={next} aria-label="Próxima">
            <FiChevronRight />
          </button>
        </div>
      )}
    </>
  )
}
