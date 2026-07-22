import { FiMapPin, FiPhone } from 'react-icons/fi'
import './TopBar.css'

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__inner container">
        <span className="topbar__item">
          <FiMapPin aria-hidden="true" />
          Teresópolis, RJ
        </span>
        <span className="topbar__item">
          <FiPhone aria-hidden="true" />
          <a href="tel:+5521978013131">(21) 97801-3131</a>
        </span>
      </div>
    </div>
  )
}
