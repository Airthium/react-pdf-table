import ReactPDF, { Page, Document, StyleSheet } from '@react-pdf/renderer'

import { ReactPdfTableData } from './index.d'

import Header from './src/header'
import Row from './src/row'

/**
 * Table props
 */
export interface TableProps {
  data: ReactPdfTableData
}

const Table = ({ data }: TableProps): ReactPDF.Document => {
  // Style
  const style = StyleSheet.create({
    page: {
      fontSize: 11,
      flexDirection: 'column'
    }
  })

  /**
   * Render
   */
  return (
    <Document>
      <Page size="A4" style={style.page}>
        <Header headers={data.headers} />
        <Row rows={data.rows} />
      </Page>
    </Document>
  )
}

export default Table
