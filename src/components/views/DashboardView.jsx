import { useState } from 'react'
import { RocketOutlined, OrderedListOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import OrdersTable from '../organisms/OrdersTable.jsx'
import SectionTitle from '../atoms/SectionTitle.jsx'
import ResponsiveGrid from '../molecules/ResponsiveGrid.jsx'
import MetricCard from '../molecules/MetricCard.jsx'

const DashboardView = ({ onContentChange }) => {
  const [showOrders, setShowOrders] = useState(false)
  return (
    <div>
      <SectionTitle level={1} variant="page">Dashboard</SectionTitle>
      <SectionTitle level={2} style={{ marginBottom: 'var(--dashboard-space-4)' }}>Métricas</SectionTitle>
      <ResponsiveGrid items={[
        { key: 'users', content: <MetricCard title="Usuarios" icon={<RocketOutlined />} onClick={() => onContentChange?.(1)} /> },
        { key: 'orders', content: <MetricCard title="Pedidos" icon={<OrderedListOutlined />} actionLabel={showOrders ? 'Ocultar' : 'Mostrar tabla'} actionIcon={showOrders ? <EyeInvisibleOutlined /> : <EyeOutlined />} onClick={() => setShowOrders(previous => !previous)} expanded={showOrders} controlsId="dashboard-orders" /> }
      ]} />
      <div id="dashboard-orders" className={showOrders ? 'dashboard-orders' : undefined}>
        {showOrders && <OrdersTable />}
      </div>
    </div>
  )
}

export default DashboardView
