import { StyleSheet, Text, View } from '@react-pdf/renderer'
import { useCallback } from 'react'

import {
  ReactPdfTableCell,
  ReactPdfTableCells,
  ReactPdfTableColumnData,
  ReactPdfTableData,
  ReactPdfTableRowData,
  ReactPdfTableStyle
} from '../index.d'
import Cell from './cell'

const Header = ({
  content
}: {
  content: ReactPdfTableCell
  style?: any
}): JSX.Element => {
  return (
    <Cell
      content={content}
      style={{ backgroundColor: '#abc', color: 'white' }}
    />
  )
}

const Rows = ({
  content
}: {
  content: ReactPdfTableCells
  style?: any
}): JSX.Element => {
  return (
    <>
      {content.map((value, index) => (
        <Cell key={index} content={value} />
      ))}
    </>
  )
}

const Footer = ({
  content
}: {
  content: ReactPdfTableCell
  style?: any
}): JSX.Element => {
  return <Text>{content}</Text>
}

/**
 * Table props
 */
export interface TableProps {
  data: ReactPdfTableData
  style?: ReactPdfTableStyle
}

/**
 * Table
 * @param props Props
 * @returns Table
 */
const Table = ({ data, style }: TableProps): JSX.Element => {
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
        <Header content={data.headers?.[index]} style={style} />
        <Rows content={column} style={style} />
      </View>
    ))
  }, [])

  /**
   * Render
   */
  return (
    <View style={internalStyle.container}>
      {data.title && (
        <View style={internalStyle.title}>
          <Text>{data.title}</Text>
        </View>
      )}

      <View style={internalStyle.table}>{tableRender()}</View>

      <Footer content={data.footer} style={style} />
    </View>
  )
}

export default Table
