import { InfoIcon } from './icons'
import '../styles/Bonus.css'

export default function Bonus() {
  return (
    <section className="bonus">
      <h2 className="bonus__title">BONUS</h2>
      <div className="bonus__card">
        <p className="bonus__msg">
          You're only <span className="bonus__accent">40%</span> away from your{' '}
          <span className="bonus__accent">M</span> Bonus!
        </p>

        <div className="bonus__bar">
          <div className="bonus__bar-track">
            <div className="bonus__bar-fill">
              <span className="bonus__bar-pct">60%</span>
            </div>
          </div>
        </div>

        <button className="bonus__info" aria-label="More info">
          <InfoIcon size={20} />
        </button>
      </div>
    </section>
  )
}
