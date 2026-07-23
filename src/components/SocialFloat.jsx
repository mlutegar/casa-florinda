import { useState, useEffect } from 'react'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { site } from '../data/site.js'
import './SocialFloat.css'

const BUTTONS = [
  {
    icon: FaInstagram,
    href: site.contato.instagramLink,
    label: 'Siga-nos no Instagram',
    title: 'Instagram – Casa Florinda',
    className: 'instagram-float',
  },
  {
    icon: FaWhatsapp,
    href: site.contato.whatsappLink,
    label: 'Fale conosco no WhatsApp',
    title: 'WhatsApp – Casa Florinda',
    className: 'wa-float',
  },
]

export default function SocialFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`social-float-group${visible ? ' social-float-group--visible' : ''}`}>
      {BUTTONS.map(({ icon: Icon, href, label, title, className }) => (
        <a
          key={className}
          className={`social-float ${className}`}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={title}
        >
          <Icon />
          <span className="social-float__tooltip">{title.split('–')[0].trim()}</span>
        </a>
      ))}
    </div>
  )
}
