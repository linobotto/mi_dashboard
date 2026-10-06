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

const mockOrders = [
  { id: 1, cliente: 'Juan Pérez', producto: 'Laptop X', cantidad: 1, total: '$450.00', estado: 'Enviado' },
  { id: 2, cliente: 'María García', producto: 'Mouse Pro', cantidad: 2, total: '$65.50', estado: 'Pagado' },
  { id: 3, cliente: 'Carlos López', producto: 'Teclado Mecha', cantidad: 1, total: '$120.90', estado: 'Procesando' },
  { id: 4, cliente: 'Ana Martínez', producto: 'Monitor 27"', cantidad: 1, total: '$385.00', estado: 'Entregado' },
  { id: 5, cliente: 'Pedro Sánchez', producto: 'Webcam HD', cantidad: 1, total: '$95.00', estado: 'Enviado' },
  { id: 6, cliente: 'Laura Torres', producto: 'Audífonos BT', cantidad: 1, total: '$110.35', estado: 'Pagado' },
  { id: 7, cliente: 'Diego Ramírez', producto: 'SSD 1TB', cantidad: 1, total: '$99.00', estado: 'Procesando' },
  { id: 8, cliente: 'Sofía Fernández', producto: 'Camisa Gráfica', cantidad: 2, total: '$56.80', estado: 'Entregado' },
]

const OrdersTable = () => {
  const [ordersData, setOrdersData] = useState(mockOrders)
  const [loading, setLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [form] = Form.useForm()

  const handleAddOrder = (values) => {
    const newId = Math.max(...ordersData.map(o => o.id), 0) + 1
    const total = (values.cantidad * values.precio).toFixed(2)
    const newOrder = {
      id: newId,
      cliente: values.cliente,
      producto: values.producto,
      cantidad: values.cantidad,
      total: `$${total}`,
      estado: values.estado,
    }
    setOrdersData((prev) => [...prev, newOrder])
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
      title: 'Cliente',
      dataIndex: 'cliente',
      key: 'cliente',
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: 'Producto',
      dataIndex: 'producto',
      key: 'producto',
    },
    {
      title: 'Cant.',
      dataIndex: 'cantidad',
      key: 'cantidad',
      width: 70,
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      width: 90,
    },
    {
      title: 'Estado',
      dataIndex: 'estado',
      key: 'estado',
      width: 110,
      render: (estado) => {
        const colorMap = {
          Enviado: 'blue',
          Pagado: 'green',
          Procesando: 'orange',
          Entregado: 'purple',
        }
        return <StatusBadge label={estado} color={colorMap[estado]} />
      },
    },
    {
      title: 'Acciones',
      key: 'acciones',
      width: 150,
      render: (_, record) => (
        <RowActions
          onEdit={() => console.log(`Editar pedido ${record.id}`)}
          onDelete={() => handleDelete(record.id)}
          deleteTitle="¿Eliminar pedido?"
          deleteDescription={`Se eliminará el pedido ${record.id} (${record.producto}). Esta acción no se puede deshacer.`}
        />
      ),
    },
  ]

  const handleDelete = (id) => {
    setOrdersData((prevOrders) => prevOrders.filter(order => order.id !== id))
  }

  return (
    <SurfaceCard variant="table">
      <SectionHeader title="Gestión de Pedidos" actions={<>
        <AppButton type="primary" size="small" icon={<PlusOutlined />} onClick={openModal}>Agregar</AppButton>
        <AppButton type="primary" size="small" onClick={() => {
          setLoading(true)
          setTimeout(() => {
            setOrdersData(mockOrders)
            setLoading(false)
          }, 1000)
        }}>Recargar Datos</AppButton>
      </>} />
      <DataTable columns={columns} dataSource={ordersData} loading={loading} />
      <FormModal
        title="Agregar Pedido"
        open={modalOpen}
        form={form}
        onFinish={handleAddOrder}
        onCancel={() => setModalOpen(false)}
        okText="Agregar"
        cancelText="Cancelar"
      >
        <FormField label="Cliente" name="cliente" rules={[{ required: true, message: 'Cliente obligatorio' }]} kind="text" placeholder="Nombre del cliente" />
        <FormField label="Producto" name="producto" rules={[{ required: true, message: 'Producto obligatorio' }]} kind="text" placeholder="Nombre del producto" />
        <FormField label="Cantidad" name="cantidad" rules={[{ required: true, message: 'Cantidad obligatoria' }]} kind="number" placeholder="Cantidad" min={1} />
        <FormField label="Precio Unitario" name="precio" rules={[{ required: true, message: 'Precio obligatorio' }]} kind="number" placeholder="Precio unitario" min={0} step={0.01} />
        <FormField label="Estado" name="estado" rules={[{ required: true, message: 'Estado obligatorio' }]} kind="select" placeholder="Selecciona un estado" options={[{ value: 'Procesando', label: 'Procesando' }, { value: 'Pagado', label: 'Pagado' }, { value: 'Enviado', label: 'Enviado' }, { value: 'Entregado', label: 'Entregado' }]} />
      </FormModal>
    </SurfaceCard>
  )
}

export default OrdersTable
