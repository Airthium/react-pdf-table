export type ReactPdfTableCell = string | JSX.Element | undefined

export type ReactPdfTableColumn = ReactPdfTableCell[]

export interface ReactPdfTableData {
  title?: ReactPdfTableCell
  headers?: ReactPdfTableColumn
  columns?: ReactPdfTableColumn[]
  footer?: ReactPdfTableColumn
}

const Table = ({ data }: { data: ReactPdfTableData }) => JSX.Element
export default Table
