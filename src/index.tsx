/** @module Table */

import React, { useCallback } from 'react'
import ReactDOM from 'react-dom/client'
import {
  Document,
  Page,
  PDFViewer,
  StyleSheet,
  Text,
  View
} from '@react-pdf/renderer'

import {
  ReactPdfTableCells,
  ReactPdfTableColumnData,
  ReactPdfTableData,
  ReactPdfTableRowData,
  ReactPdfTableStyle
} from '../index.d'

import Header from './header'
import Rows from './rows'
import Footer from './footer'

/**
 * Table props
 */
export interface TableProps {
  data: ReactPdfTableData
  style?: ReactPdfTableStyle
  wrap?: boolean
}

/**
 * Table
 * @param props Props
 * @returns Table
 */
const Table = ({ data, style, wrap = true }: TableProps): JSX.Element => {
  // Style
  const internalStyle = StyleSheet.create({
    container: {
      padding: '10px',
      ...(style?.container || {})
    },
    title: {
      fontSize: '16px',
      marginBottom: '10px',
      ...(style?.title || {})
    },
    table: {
      display: 'flex',
      flexDirection: 'row',
      border: '1px solid black',
      ...(style?.table || {})
    },
    column: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      borderRight: '1px solid black',
      ...(style?.column || {})
    }
  })

  /**
   * Table render
   * @returns Render
   */
  const tableRender = useCallback((): JSX.Element[] => {
    let columns: ReactPdfTableCells[] = []

    // Row
    const rowData = data as ReactPdfTableRowData
    const columnData = data as ReactPdfTableColumnData
    if (rowData.rows) {
      // Convert rows to columns
      rowData.rows.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          if (!columns[colIndex]) columns[colIndex] = []
          columns[colIndex][rowIndex] = cell
        })
      })
    } else {
      // Use columns
      columns = columnData.columns
    }

    // Render
    return columns.map((column, index) => (
      <View key={index} style={internalStyle.column}>
        <Header content={data.headers?.[index]} style={style?.header} />
        <Rows content={column} style={style?.cell} />
      </View>
    ))
  }, [])

  /**
   * Render
   */
  return (
    <View style={internalStyle.container} wrap={wrap}>
      {data.title && (
        <View style={internalStyle.title}>
          <Text>{data.title}</Text>
        </View>
      )}

      <View style={internalStyle.table}>{tableRender()}</View>

      <Footer content={data.footer} style={style?.footer} />
    </View>
  )
}

if (process.env.REACT_APP_RENDER_TEST) {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  )

  const data = {
    title: 'Table title',
    headers: [
      'head 1',
      'the long head 2, too long to stay just in one line',
      'head 3'
    ],
    rows: [
      ['head1, row1', 'head2, row1', 'head3, row1'],
      ['head1, row2', 'head2, row2', 'head2, row2']
    ]
  }

  root.render(
    <React.StrictMode>
      <PDFViewer width={800} height={600}>
        <Document>
          <Page size="A4">
            <Table data={data} />
          </Page>
        </Document>
      </PDFViewer>
    </React.StrictMode>
  )
}

export default Table
