import { SettingsIcon, BellIcon, PersonIcon, LogoutIcon } from './icons'
import '../styles/Header.css'

const NAV_ITEMS = ['HOME', 'TRANSACTION', 'VAULT', 'INSIGHT'] as const

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__logo" href="#" aria-label="AuVault">
          <img src="/assets/auvault-logo.png" alt="AuVault" />
        </a>

        <nav className="header__nav" aria-label="Primary">
          {NAV_ITEMS.map((label) => (
            <a
              key={label}
              href="#"
              className={
                'header__nav-link' +
                (label === 'HOME' ? ' header__nav-link--active' : '')
              }
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="header__icons">
          <button className="header__icon-btn" aria-label="Settings">
            <SettingsIcon />
          </button>
          <button className="header__icon-btn" aria-label="Notifications">
            <BellIcon />
          </button>
          <button className="header__icon-btn" aria-label="Account">
            <PersonIcon />
          </button>
          <button className="header__icon-btn" aria-label="Logout">
            <LogoutIcon />
          </button>
          <button className="header__flag-btn" aria-label="Language: English">
            <img src="/assets/gb-flag.png" alt="" />
          </button>
        </div>
      </div>
    </header>
  )
}
