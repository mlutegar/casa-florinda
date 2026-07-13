import { useState } from 'react'
import { BASE } from '../data/site.js'
import './Img.css'

const WIDTHS = [480, 960, 1600]

// Imagem responsiva com <picture> (webp+jpg), srcset/sizes, lazy e fade-in.
// `name` = nome-base sem extensao (ex.: "pousada-01").
export default function Img({ name, alt = '', sizes = '100vw', className = '', eager = false, ...rest }) {
  const [loaded, setLoaded] = useState(false)
  const url = (n) => `${BASE}midia/${n}`
  const srcset = (ext) => WIDTHS.map((w) => `${url(`${name}-${w}.${ext}`)} ${w}w`).join(', ')

  return (
    <picture>
      <source type="image/webp" srcSet={srcset('webp')} sizes={sizes} />
      <source type="image/jpeg" srcSet={srcset('jpg')} sizes={sizes} />
      <img
        src={url(`${name}.jpg`)}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`img-fade ${loaded ? 'is-loaded' : ''} ${className}`}
        onLoad={() => setLoaded(true)}
        {...rest}
      />
    </picture>
  )
}
