import Header from './components/Header'
import SecondaryToolbar from './components/SecondaryToolbar'
import Depot from './components/Depot'
import CurrentHoldings from './components/CurrentHoldings'
import Bonus from './components/Bonus'
import AutoSwitch from './components/AutoSwitch'
import './styles/Dashboard.css'

function App() {
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

export default App
