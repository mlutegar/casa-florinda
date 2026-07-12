import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import Brand from './Brand.jsx'
import { site } from '../data/site.js'
import './Navbar.css'

const links = [
  { to: '/', label: 'Início', end: true },
  { to: '/acomodacoes', label: 'Acomodações' },
  { to: '/sobre-nos', label: 'Sobre Nós' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <Brand variant={scrolled ? 'dark' : 'light'} size="sm" />
        </Link>

        <nav className={`nav__menu ${open ? 'is-open' : ''}`}>
          <ul>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="nav__cta-mobile">
              <a href={site.contato.whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary">
                Reserve Já
              </a>
            </li>
          </ul>
        </nav>

        <a
          href={site.contato.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary nav__cta"
        >
          Reserve Já
        </a>

        <button
          className="nav__toggle"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  )
}
