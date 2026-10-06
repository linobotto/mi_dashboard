import { Modal, Form } from 'antd'

const FormModal = ({ title, open, form, onFinish, onCancel, children, okText = 'Agregar', cancelText = 'Cancelar', confirmLoading = false }) => (
  <Modal title={title} open={open} onOk={() => form.submit()} onCancel={onCancel} okText={okText} cancelText={cancelText} confirmLoading={confirmLoading}>
    <Form form={form} layout="vertical" onFinish={onFinish}>{children}</Form>
  </Modal>
)

export default FormModal
