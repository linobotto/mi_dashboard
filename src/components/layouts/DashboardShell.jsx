import { Layout } from 'antd'
import SidebarNavigation from '../organisms/SidebarNavigation.jsx'
import AppFooter from '../molecules/AppFooter.jsx'
import './DashboardShell.css'

const DashboardShell = ({ children, navigationItems, selectedKey, onSelect, brand, footer, sidebarWidth = 200 }) => (
  <Layout className="dashboard-shell" style={{ '--dashboard-sidebar-width': `${sidebarWidth}px` }}>
    <SidebarNavigation brand={brand} items={navigationItems} selectedKey={selectedKey} onSelect={onSelect} width={sidebarWidth} />
    <Layout className="dashboard-shell-body">
      <Layout.Content className="dashboard-content">{children}</Layout.Content>
      <AppFooter>{footer}</AppFooter>
    </Layout>
  </Layout>
)

export default DashboardShell
