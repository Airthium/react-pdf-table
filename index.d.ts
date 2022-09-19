export type ReactPdfTableCell = string | JSX.Element | undefined

export type ReactPdfTableCells = ReactPdfTableCell[]

export interface ReactPdfTableBaseData {
  title?: ReactPdfTableCell
  headers?: ReactPdfTableCells
  footer?: ReactPdfTableCell
}

export interface ReactPdfTableColumnData extends ReactPdfTableBaseData {
  columns: ReactPdfTableCells[]
}

export interface ReactPdfTableRowData extends ReactPdfTableBaseData {
  rows: ReactPdfTableCells[]
}

export type ReactPdfTableData = ReactPdfTableColumnData | ReactPdfTableRowData

const Table = ({ data }: { data: ReactPdfTableData }) => JSX.Element
export default Table
