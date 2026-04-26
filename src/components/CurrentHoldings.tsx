import { DownloadIcon } from './icons'
import '../styles/CurrentHoldings.css'

const HOLDINGS = [
  { metal: 'Gold', amount: '150.0000 g', icon: '/assets/gold-bar-icon.png' },
  { metal: 'Silver', amount: '150.0000 g', icon: '/assets/silver-bar-icon.png' },
  {
    metal: 'Platinum',
    amount: '150.0000 g',
    pending: '50.00g Pending',
    icon: '/assets/platinum-bar-icon.png',
  },
  { metal: 'Palladium', amount: '150.0000 g', icon: '/assets/palladium-bar-icon.png' },
]

export default function CurrentHoldings() {
  return (
    <section className="holdings">
      <h2 className="holdings__title">CURRENT HOLDINGS</h2>
      <div className="holdings__card">
        <ul className="holdings__list">
          {HOLDINGS.map((h) => (
            <li key={h.metal} className="holdings__row">
              <span className="holdings__metal">
                <img className="holdings__bar-icon" src={h.icon} alt="" />
                <span className="holdings__metal-name">{h.metal}</span>
              </span>
              <span className="holdings__amount-wrap">
                <span className="holdings__amount">{h.amount}</span>
                {h.pending && (
                  <span className="holdings__pending">{h.pending}</span>
                )}
              </span>
            </li>
          ))}
        </ul>

        <button className="holdings__cta">
          <span>OVERVIEW</span>
          <span className="holdings__cta-icon">
            <DownloadIcon size={16} />
          </span>
        </button>
      </div>
    </section>
  )
}
