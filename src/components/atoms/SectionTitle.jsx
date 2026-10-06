import { Typography } from 'antd'
import './SectionTitle.css'

const SectionTitle = ({ children, level, variant = 'section', icon, className = '', ...props }) => {
  const Title = variant === 'brand' ? Typography.Text : Typography.Title
  return (
    <Title {...props} {...(variant === 'brand' ? {} : { level })} className={`dashboard-title dashboard-title-${variant} ${className}`}>
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </Title>
  )
}

export default SectionTitle
