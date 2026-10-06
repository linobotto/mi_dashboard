import { Layout } from 'antd'
import './AppFooter.css'

const AppFooter = ({ children = 'Dashboard Template by Ant Design Pro', className = '' }) => <Layout.Footer className={`dashboard-footer ${className}`}>{children}</Layout.Footer>

export default AppFooter
