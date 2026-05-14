import { useEffect } from 'react'
import Header from './components/Header'
import SecondaryToolbar from './components/SecondaryToolbar'
import Depot from './components/Depot'
import CurrentHoldings from './components/CurrentHoldings'
import Bonus from './components/Bonus'
import AutoSwitch from './components/AutoSwitch'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login/Login'
import { useAuth } from './hooks/useAuth'
import { navigate, useLocation } from './lib/navigation'
import './styles/Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <SecondaryToolbar />
      <main className="dashboard__main">
        <div className="dashboard__left">
          <Depot />
        </div>
        <div className="dashboard__right">
          <div className="dashboard__row">
            <CurrentHoldings />
            <Bonus />
          </div>
          <AutoSwitch />
        </div>
      </main>
    </div>
  )
}

function App() {
  const path = useLocation()
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (path === '/login' && isAuthenticated) {
      navigate('/')
    }
  }, [path, isAuthenticated])

  if (path === '/login') {
    if (isAuthenticated) return null
    return <Login />
  }

  return (
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  )
}

export default App
