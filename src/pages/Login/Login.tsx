import { useState, type FormEvent } from 'react'
import { useAuth, type AuthUser } from '../../hooks/useAuth'
import { navigate } from '../../lib/navigation'
import styles from './Login.module.css'

type Credential = AuthUser & { password: string }

const CREDENTIALS: Credential[] = [
  { email: 'partner@auvault.com', password: 'partner123', role: 'partner' },
  { email: 'staff@auvault.com', password: 'staff123', role: 'staff' },
]

export default function Login() {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (submitting) return
    setError(null)
    setSubmitting(true)

    await new Promise((r) => setTimeout(r, 800))

    const match = CREDENTIALS.find(
      (c) =>
        c.email === email.trim().toLowerCase() && c.password === password,
    )

    if (!match) {
      setError('Invalid email or password. Please try again.')
      setSubmitting(false)
      return
    }

    login({ email: match.email, role: match.role })

    if (match.role === 'staff') {
      // TODO: redirect to /internal/dashboard when built
      navigate('/')
    } else {
      navigate('/')
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.sectionTitle}>STAFF PORTAL</h1>

        <div className={styles.card}>
          <div className={styles.brand}>
            <img src="/assets/auvault-logo.png" alt="AuVault" />
          </div>
          <p className={styles.tagline}>Sign in to continue</p>

          <form onSubmit={onSubmit} className={styles.form} noValidate>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>Email address</span>
              <input
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                disabled={submitting}
              />
            </label>

            <label className={styles.field}>
              <span className={styles.fieldLabel}>Password</span>
              <div className={styles.passwordWrap}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                  disabled={submitting}
                />
                <button
                  type="button"
                  className={styles.eyeBtn}
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  aria-pressed={showPassword}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </label>

            <div className={styles.row}>
              <label className={styles.remember}>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className={styles.checkbox}
                  disabled={submitting}
                />
                <span>Remember me</span>
              </label>
            </div>

            <button
              type="submit"
              className={styles.submit}
              disabled={submitting}
              aria-busy={submitting}
            >
              {submitting ? 'Signing in…' : 'Sign In'}
            </button>

            {error && (
              <p role="alert" className={styles.error}>
                {error}
              </p>
            )}

            <a
              href="#"
              className={styles.helpLink}
              onClick={(e) => e.preventDefault()}
            >
              Need help signing in?
            </a>
          </form>
        </div>
      </div>
    </div>
  )
}

function EyeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function EyeOffIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a19.66 19.66 0 0 1 4.22-5.11" />
      <path d="M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a19.7 19.7 0 0 1-3.13 4.13" />
      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  )
}
