import { Typography } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import SectionTitle from '../atoms/SectionTitle.jsx'
import SurfaceCard from '../atoms/SurfaceCard.jsx'

const SettingsView = () => (
  <SurfaceCard centered>
    <SectionTitle level={1} variant="page" icon={<SettingOutlined />} style={{ justifyContent: 'center' }}>Ajustes</SectionTitle>
    <Typography.Text>Página de ajustes (pendiente de implementar)</Typography.Text>
  </SurfaceCard>
)

export default SettingsView
