import { Tag } from 'antd'

const StatusBadge = ({ label, color, className }) => <Tag color={color} className={className}>{label}</Tag>

export default StatusBadge
