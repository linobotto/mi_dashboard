import { Space, Popconfirm } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import AppButton from '../atoms/AppButton.jsx'

const RowActions = ({ onEdit, onDelete, deleteTitle, deleteDescription, editLabel = 'Editar', deleteLabel = 'Eliminar', confirmLabel = 'Sí, eliminar', cancelLabel = 'Cancelar', disabled = false }) => (
  <Space>
    <AppButton type="primary" size="small" icon={<EditOutlined />} onClick={onEdit} disabled={disabled}>{editLabel}</AppButton>
    <Popconfirm title={deleteTitle} description={deleteDescription} onConfirm={onDelete} okText={confirmLabel} cancelText={cancelLabel} disabled={disabled}>
      <AppButton type="primary" danger size="small" icon={<DeleteOutlined />} disabled={disabled}>{deleteLabel}</AppButton>
    </Popconfirm>
  </Space>
)

export default RowActions
