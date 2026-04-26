import { InfoIcon, PencilIcon } from './icons'
import '../styles/Depot.css'

const ALLOCATION = [
  { label: '30%' },
  { label: '60%' },
  { label: '5%' },
  { label: '5%' },
]

export default function Depot() {
  return (
    <section className="depot">
      <h2 className="depot__title">DEPOT</h2>
      <div className="depot__card">
        <div className="depot__card-bg" aria-hidden>
          <div className="depot__cog depot__cog--lg">
            <GearWatermark size={420} />
          </div>
          <div className="depot__cog depot__cog--sm">
            <GearWatermark size={180} />
          </div>
        </div>

        <div className="depot__rows">
          <div className="depot__row">
            <span className="depot__label">Tariff</span>
            <button className="depot__upgrade">UPGRADE</button>
            <span className="depot__value">M-6 EUR</span>
          </div>

          <div className="depot__row">
            <span className="depot__label">Depot</span>
            <span className="depot__value">UK-123456-R</span>
          </div>

          <hr className="depot__rule" />

          <div className="depot__row">
            <span className="depot__label">Total Purchases</span>
            <span className="depot__value">€12,000.00</span>
          </div>

          <div className="depot__row">
            <span className="depot__label">Total Sales</span>
            <span className="depot__value">€120.00</span>
          </div>

          <div className="depot__row depot__row--allocation">
            <span className="depot__label">Purchase Allocation</span>
            <span className="depot__info">
              <InfoIcon size={16} />
            </span>
          </div>

          <div className="depot__allocation-bar" aria-hidden>
            <div className="depot__alloc-seg depot__alloc-seg--gold" style={{ flex: 30 }} />
            <div className="depot__alloc-seg depot__alloc-seg--silver" style={{ flex: 60 }} />
            <div className="depot__alloc-seg depot__alloc-seg--platinum" style={{ flex: 5 }} />
            <div className="depot__alloc-seg depot__alloc-seg--palladium" style={{ flex: 5 }} />
          </div>

          <div className="depot__alloc-values">
            {ALLOCATION.map((seg, i) => (
              <span key={i} className="depot__alloc-value">
                {seg.label}
              </span>
            ))}
          </div>
        </div>

        <button className="depot__edit" aria-label="Edit depot">
          <PencilIcon size={18} />
        </button>
      </div>
    </section>
  )
}

function GearWatermark({ size = 200 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <circle cx="50" cy="50" r="14" />
      <circle cx="50" cy="50" r="34" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180
        const x1 = 50 + Math.cos(angle) * 36
        const y1 = 50 + Math.sin(angle) * 36
        const x2 = 50 + Math.cos(angle) * 46
        const y2 = 50 + Math.sin(angle) * 46
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="6" strokeLinecap="butt" />
      })}
    </svg>
  )
}
