import { ClockIcon, CartIcon, HeadsetIcon } from './icons'
import '../styles/SecondaryToolbar.css'

const ITEMS = [
  { label: 'RECENT ACTIVITY', icon: <ClockIcon /> },
  { label: 'BUY METALS', icon: <CartIcon /> },
  { label: 'SUPPORT', icon: <HeadsetIcon /> },
] as const

export default function SecondaryToolbar() {
  return (
    <div className="toolbar">
      <div className="toolbar__line" aria-hidden />
      <div className="toolbar__items">
        {ITEMS.map((item, i) => (
          <div key={item.label} className="toolbar__item-wrap">
            {i > 0 && <div className="toolbar__divider" aria-hidden />}
            <button className="toolbar__item">
              <span className="toolbar__icon" aria-hidden>
                {item.icon}
              </span>
              <span className="toolbar__label">{item.label}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
