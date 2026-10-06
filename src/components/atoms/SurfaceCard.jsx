import { Card } from 'antd'
import './SurfaceCard.css'

const SurfaceCard = ({ children, variant = 'settings', title, centered = false, fullHeight = false, className = '', style }) => (
  <Card title={title} style={style} className={`dashboard-surface dashboard-surface-${variant} ${centered ? 'dashboard-surface-centered' : ''} ${fullHeight ? 'dashboard-surface-full' : ''} ${className}`}>
    {children}
  </Card>
)

export default SurfaceCard
