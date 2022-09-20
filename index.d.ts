import ReactPDF from '@react-pdf/renderer'

export type ReactPdfTableCell = string | JSX.Element | undefined

/**
 * Cell
 */
export type ReactPdfTableCells = ReactPdfTableCell[]

/**
 * Base data
 */
export interface ReactPdfTableBaseData {
  title?: ReactPdfTableCell
  headers?: ReactPdfTableCells
  footer?: ReactPdfTableCell
}

/**
 * Column
 */
export interface ReactPdfTableColumnData extends ReactPdfTableBaseData {
  columns: ReactPdfTableCells[]
}

/**
 * Row
 */
export interface ReactPdfTableRowData extends ReactPdfTableBaseData {
  rows: ReactPdfTableCells[]
}

/**
 * Data
 */
export type ReactPdfTableData = ReactPdfTableColumnData | ReactPdfTableRowData

// Style
type Style = ReactPDF.Styles['key']

/**
 * Style
 */
export interface ReactPdfTableStyle {
  container: Style
  title: Style
  table: Style
  header: Style
  column: Style
  cell: Style
  footer: Style
}

/**
 * Table
 * @param props Props
 * @returns Table
 */
const Table = ({
  data
}: {
  data: ReactPdfTableData
  style?: ReactPdfTableStyle
}) => JSX.Element

export default Table
