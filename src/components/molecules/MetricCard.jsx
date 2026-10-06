import { RocketOutlined } from '@ant-design/icons'
import AppButton from '../atoms/AppButton.jsx'
import SectionTitle from '../atoms/SectionTitle.jsx'
import SurfaceCard from '../atoms/SurfaceCard.jsx'

const MetricCard = ({ title, icon = <RocketOutlined />, description = 'Métrica de ejemplo', actionLabel = 'Ver más', actionIcon, onClick, actionDisabled = false, actionLoading = false, expanded, controlsId }) => (
  <SurfaceCard variant="metric" centered fullHeight>
    <SectionTitle level={3} variant="card" icon={icon}>{title}</SectionTitle>
    <p className="dashboard-metric-description">{description}</p>
    <AppButton type="primary" icon={actionIcon} onClick={onClick} disabled={actionDisabled || !onClick} loading={actionLoading} aria-expanded={expanded} aria-controls={controlsId}>
      {actionLabel}
    </AppButton>
  </SurfaceCard>
)

export default MetricCard
