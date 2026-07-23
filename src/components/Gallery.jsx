import { useState, useCallback, useEffect } from 'react'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Img from './Img.jsx'
import { img, baseName } from '../data/site.js'
import { useT } from '../i18n/LanguageProvider.jsx'
import './Gallery.css'

// Aceita galeria como array de strings ('foto.webp') ou objetos ({ file, alt })
function resolve(item, i) {
  if (typeof item === 'string') return { file: item, alt: `Casa Florinda — foto ${i + 1}` }
  return { file: item.file, alt: item.alt ?? `Casa Florinda — foto ${i + 1}` }
}

export default function Gallery({ images }) {
  const { t } = useT()
  const [index, setIndex] = useState(-1)
  const open = index >= 0
  const items = images.map(resolve)

  const close = useCallback(() => setIndex(-1), [])
  const prev = useCallback(
    (e) => {
      e?.stopPropagation()
      setIndex((i) => (i - 1 + items.length) % items.length)
    },
    [items.length],
  )
  const next = useCallback(
    (e) => {
      e?.stopPropagation()
      setIndex((i) => (i + 1) % items.length)
    },
    [items.length],
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
        {items.map(({ file, alt }, i) => (
          <button className="gallery__item" key={file + i} onClick={() => setIndex(i)}>
            <Img name={baseName(file)} alt={alt} sizes="(max-width: 760px) 50vw, 300px" />
          </button>
        ))}
      </div>

      {open && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
          <button className="lightbox__close" onClick={close} aria-label={t('gallery.fechar')}>
            <FiX />
          </button>
          <button className="lightbox__nav lightbox__prev" onClick={prev} aria-label={t('gallery.anterior')}>
            <FiChevronLeft />
          </button>
          <img
            className="lightbox__img"
            src={img(items[index].file)}
            alt={items[index].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox__nav lightbox__next" onClick={next} aria-label={t('gallery.proxima')}>
            <FiChevronRight />
          </button>
        </div>
      )}
    </>
  )
}
