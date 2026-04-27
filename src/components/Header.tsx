import { useEffect, useState } from 'react'
import { SettingsIcon, BellIcon, PersonIcon, LogoutIcon } from './icons'
import '../styles/Header.css'

const NAV_ITEMS = ['HOME', 'TRANSACTION', 'VAULT', 'INSIGHT'] as const

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="header">
      <div className="header__inner">
        <button
          className={'header__hamburger' + (menuOpen ? ' is-open' : '')}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span aria-hidden />
          <span aria-hidden />
          <span aria-hidden />
        </button>

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

      <div
        className={'header__drawer' + (menuOpen ? ' is-open' : '')}
        aria-hidden={!menuOpen}
      >
        <nav className="header__drawer-nav" aria-label="Mobile">
          {NAV_ITEMS.map((label) => (
            <a
              key={label}
              href="#"
              className={
                'header__drawer-link' +
                (label === 'HOME' ? ' header__drawer-link--active' : '')
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="header__drawer-icons">
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
        </nav>
      </div>

      {menuOpen && (
        <button
          className="header__scrim"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  )
}
