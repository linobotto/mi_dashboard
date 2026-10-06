import SectionTitle from '../atoms/SectionTitle.jsx'
import './SectionHeader.css'

const SectionHeader = ({ title, titleLevel = 2, titleId, actions, className = '' }) => (
  <div className={`dashboard-section-header ${className}`}>
    <SectionTitle level={titleLevel} id={titleId}>{title}</SectionTitle>
    {actions && <div className="dashboard-section-actions">{actions}</div>}
  </div>
)

export default SectionHeader
