import React from 'react'
import { Page, Document, StyleSheet } from '@react-pdf/renderer'

import { ReactPdfTableData } from '../index.d'

import Header from './header'
import Row from './row'

/**
 * Table props
 */
export interface TableProps {
  data: ReactPdfTableData
}

const Table = ({ data }: TableProps) => {
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
