import { Table } from 'antd'

const defaultPagination = { position: ['bottomRight'], defaultPageSize: 5, showSizeChanger: true }

const normalizePagination = pagination => {
  if (pagination === false) return false
  const { position, placement, ...options } = { ...defaultPagination, ...pagination }
  return {
    ...options,
    placement: placement ?? position?.map(value => value.replace('Left', 'Start').replace('Right', 'End'))
  }
}

const DataTable = ({ columns, dataSource, rowKey = 'id', loading = false, pagination, size = 'middle', scroll = { x: 'max-content' }, onChange, locale, className }) => (
  <Table columns={columns} dataSource={dataSource} rowKey={rowKey} loading={loading} pagination={normalizePagination(pagination)} size={size} scroll={scroll} onChange={onChange} locale={locale} className={className} />
)

export default DataTable
