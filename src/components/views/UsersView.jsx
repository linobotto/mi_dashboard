import UserTable from '../organisms/UserTable.jsx'
import SectionTitle from '../atoms/SectionTitle.jsx'

const UsersView = () => (
  <div>
    <SectionTitle level={1} variant="page">Usuarios</SectionTitle>
    <UserTable />
  </div>
)

export default UsersView
