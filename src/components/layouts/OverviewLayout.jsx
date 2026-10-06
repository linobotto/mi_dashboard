import MetricCard from '../molecules/MetricCard.jsx'
import ResponsiveGrid from '../molecules/ResponsiveGrid.jsx'

const OverviewLayout = ({ onContentChange }) => (
  <ResponsiveGrid items={[
    { key: 'users', content: <MetricCard title="Usuarios" onClick={() => onContentChange(1)} /> },
    { key: 'orders', content: <MetricCard title="Pedidos" onClick={() => {}} /> }
  ]} />
)

export default OverviewLayout
