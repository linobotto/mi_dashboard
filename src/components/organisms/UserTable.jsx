import { useState } from 'react'
import { Form } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import AppButton from '../atoms/AppButton.jsx'
import StatusBadge from '../atoms/StatusBadge.jsx'
import SurfaceCard from '../atoms/SurfaceCard.jsx'
import SectionHeader from '../molecules/SectionHeader.jsx'
import RowActions from '../molecules/RowActions.jsx'
import FormField from '../molecules/FormField.jsx'
import DataTable from './DataTable.jsx'
import FormModal from './FormModal.jsx'

const mockUsers = [
  { id: 1, nombre: 'Juan', apellido: 'Pérez', edad: 32, rol: 'Admin' },
  { id: 2, nombre: 'María', apellido: 'García', edad: 28, rol: 'Editor' },
  { id: 3, nombre: 'Carlos', apellido: 'López', edad: 45, rol: 'Viewer' },
  { id: 4, nombre: 'Ana', apellido: 'Martínez', edad: 38, rol: 'Admin' },
  { id: 5, nombre: 'Pedro', apellido: 'Sánchez', edad: 24, rol: 'Editor' },
  { id: 6, nombre: 'Laura', apellido: 'Torres', edad: 31, rol: 'Viewer' },
  { id: 7, nombre: 'Diego', apellido: 'Ramírez', edad: 42, rol: 'Admin' },
  { id: 8, nombre: 'Sofía', apellido: 'Fernández', edad: 29, rol: 'Editor' },
]

const UserTable = () => {
  const [usersData, setUsersData] = useState(mockUsers)
  const [loading, setLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [form] = Form.useForm()

  const handleAddUser = (values) => {
    const newId = Math.max(...usersData.map(u => u.id), 0) + 1
    const newUser = { id: newId, ...values }
    setUsersData((prev) => [...prev, newUser])
    form.resetFields()
    setModalOpen(false)
  }

  const openModal = () => {
    form.resetFields()
    setModalOpen(true)
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 60,
    },
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: 'Apellido',
      dataIndex: 'apellido',
      key: 'apellido',
    },
    {
      title: 'Edad',
      dataIndex: 'edad',
      key: 'edad',
      width: 70,
    },
    {
      title: 'Rol',
      dataIndex: 'rol',
      key: 'rol',
      render: (rol) => {
        const colorMap = {
          Admin: 'blue',
          Editor: 'green',
          Viewer: 'orange',
        }
        return <StatusBadge label={rol} color={colorMap[rol]} />
      },
    },
    {
      title: 'Acciones',
      key: 'acciones',
      width: 150,
      render: (_, record) => (
        <RowActions
          onEdit={() => console.log(`Editar usuario ${record.id}`)}
          onDelete={() => handleDelete(record.id)}
          deleteTitle="¿Eliminar usuario?"
          deleteDescription={`Se eliminará a ${record.nombre} ${record.apellido}. Esta acción no se puede deshacer.`}
        />
      ),
    },
  ]

  const handleDelete = (id) => {
    setUsersData((prevUsers) => prevUsers.filter(user => user.id !== id))
  }

  return (
    <SurfaceCard variant="table">
      <SectionHeader title="Gestión de Usuarios" actions={<>
        <AppButton type="primary" size="small" icon={<PlusOutlined />} onClick={openModal}>Agregar</AppButton>
        <AppButton type="primary" size="small" onClick={() => {
          setLoading(true)
          setTimeout(() => {
            setUsersData(mockUsers)
            setLoading(false)
          }, 1000)
        }}>Recargar Datos</AppButton>
      </>} />
      <DataTable columns={columns} dataSource={usersData} loading={loading} />
      <FormModal
        title="Agregar Usuario"
        open={modalOpen}
        form={form}
        onFinish={handleAddUser}
        onCancel={() => setModalOpen(false)}
        okText="Agregar"
        cancelText="Cancelar"
      >
        <FormField label="Nombre" name="nombre" rules={[{ required: true, message: 'Nombre obligatorio' }]} kind="text" placeholder="Nombre" />
        <FormField label="Apellido" name="apellido" rules={[{ required: true, message: 'Apellido obligatorio' }]} kind="text" placeholder="Apellido" />
        <FormField label="Edad" name="edad" rules={[{ required: true, message: 'Edad obligatoria' }]} kind="number" placeholder="Edad" min={0} />
        <FormField label="Rol" name="rol" rules={[{ required: true, message: 'Rol obligatorio' }]} kind="select" placeholder="Selecciona un rol" options={[{ value: 'Admin', label: 'Admin' }, { value: 'Editor', label: 'Editor' }, { value: 'Viewer', label: 'Viewer' }]} />
      </FormModal>
    </SurfaceCard>
  )
}

export default UserTable
