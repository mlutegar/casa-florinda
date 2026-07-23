import { useEffect, useRef, useState } from 'react'
import { FiMapPin, FiPhone } from 'react-icons/fi'
import { site, telefone } from '../data/site.js'
import './TopBar.css'

export default function TopBar() {
  const [visible, setVisible] = useState(true)
  const lastY = useRef(0)

  // Oculta ao rolar para baixo, reexibe ao rolar para cima
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const goingDown = y > lastY.current && y > 60
      setVisible(!goingDown)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Adiciona classe no body para que o Navbar acompanhe o movimento
  useEffect(() => {
    document.body.classList.toggle('topbar-hidden', !visible)
  }, [visible])

  const cidade = `${site.contato.cidade}, ${site.contato.estado}`

  return (
    <div className={`topbar${visible ? '' : ' topbar--hidden'}`} aria-label="Informações de contato">
      <div className="topbar__inner container">
        <span className="topbar__item">
          <FiMapPin aria-hidden="true" />
          {cidade}
        </span>
        <span className="topbar__separator" aria-hidden="true">·</span>
        <span className="topbar__item">
          <FiPhone aria-hidden="true" />
          <a href={telefone.link} title="Ligar para Casa Florinda">
            {telefone.display}
          </a>
        </span>
      </div>
    </div>
  )
}
