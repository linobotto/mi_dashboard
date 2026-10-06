import { Layout, Menu } from 'antd'
import SectionTitle from '../atoms/SectionTitle.jsx'
import './SidebarNavigation.css'

const SidebarNavigation = ({ brand = 'Dashboard', items, selectedKey, onSelect, width = 200 }) => (
  <Layout.Sider width={width} className="dashboard-sidebar">
    <nav aria-label="Navegación principal">
      <div className="dashboard-brand"><SectionTitle variant="brand">{brand}</SectionTitle></div>
      <Menu theme="dark" mode="inline" items={items} selectedKeys={[selectedKey]} onClick={({ key }) => onSelect(key)} />
    </nav>
  </Layout.Sider>
)

export default SidebarNavigation
