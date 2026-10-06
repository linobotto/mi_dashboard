import { useState } from 'react'
import { DashboardOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons'
import DashboardShell from './DashboardShell.jsx'
import DashboardView from '../views/DashboardView.jsx'
import UsersView from '../views/UsersView.jsx'
import SettingsView from '../views/SettingsView.jsx'

const menuItems = [
  { key: '0', icon: <DashboardOutlined />, label: 'Dashboard' },
  { key: '1', icon: <UserOutlined />, label: 'Usuarios' },
  { key: '2', icon: <SettingOutlined />, label: 'Ajustes' }
]

const DashboardLayout = () => {
  const [selectedContent, setSelectedContent] = useState(0)
  return (
    <DashboardShell navigationItems={menuItems} selectedKey={String(selectedContent)} onSelect={key => setSelectedContent(Number(key))}>
      {selectedContent === 0 && <DashboardView onContentChange={setSelectedContent} />}
      {selectedContent === 1 && <UsersView />}
      {selectedContent === 2 && <SettingsView />}
    </DashboardShell>
  )
}

export default DashboardLayout
