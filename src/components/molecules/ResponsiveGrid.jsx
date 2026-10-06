import { Row, Col } from 'antd'

const ResponsiveGrid = ({ items, gutter = [16, 16], columns = { xs: 24, sm: 12 }, className = '' }) => (
  <Row gutter={gutter} className={`dashboard-grid ${className}`}>
    {items.map(({ key, content }) => <Col key={key} {...columns}>{content}</Col>)}
  </Row>
)

export default ResponsiveGrid
