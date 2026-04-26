import { GearIcon } from './icons'
import '../styles/AutoSwitch.css'

export default function AutoSwitch() {
  return (
    <section className="autoswitch">
      <div className="autoswitch__card">
        <div className="autoswitch__content">
          <img
            className="autoswitch__logo"
            src="/assets/autoswitch-logo.png"
            alt="AutoSwitch"
          />

          <button className="autoswitch__cta">
            <span>EXPLORE</span>
            <span className="autoswitch__cta-icon">
              <GearIcon size={18} />
            </span>
          </button>

          <p className="autoswitch__tagline">
            Discover <strong>AutoSwitch</strong>® and let our system{' '}
            <strong>automatically</strong> optimise your gold and silver
            portfolio.
          </p>
        </div>

        <div className="autoswitch__art" aria-hidden>
          <img
            className="autoswitch__bar autoswitch__bar--silver"
            src="/assets/silver-bar.png"
            alt=""
          />
          <img
            className="autoswitch__bar autoswitch__bar--gold"
            src="/assets/gold-bar.png"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}
