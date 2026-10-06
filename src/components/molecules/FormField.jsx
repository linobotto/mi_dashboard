import { Form, Input, InputNumber, Select } from 'antd'

const safeProps = (props = {}) => Object.fromEntries(Object.entries(props).filter(([key]) => !['name', 'rules', 'value', 'onChange', 'defaultValue', 'initialValue', 'children', 'getValueProps', 'getValueFromEvent', 'normalize', 'trigger', 'valuePropName'].includes(key)))

const FormField = ({ name, label, kind, rules, placeholder, options, min, max, step, disabled = false, controlProps, itemProps }) => {
  const props = { ...safeProps(controlProps), placeholder, disabled }
  let control = <Input {...props} />
  if (kind === 'number') control = <InputNumber {...props} min={min} max={max} step={step} style={{ ...props.style, width: '100%' }} />
  if (kind === 'select') control = <Select {...props} options={options} style={{ ...props.style, width: '100%' }} />
  return <Form.Item {...safeProps(itemProps)} name={name} label={label} rules={rules}>{control}</Form.Item>
}

export default FormField
