import { StyleSheet, Text, View } from '@react-pdf/renderer'
import { useCallback } from 'react'

import {
  ReactPdfTableCell,
  ReactPdfTableCells,
  ReactPdfTableColumnData,
  ReactPdfTableData,
  ReactPdfTableRowData
} from '../index.d'
import Cell from './cell'

const Header = ({ content }: { content: ReactPdfTableCell }): JSX.Element => {
  return (
    <Cell
      content={content}
      style={{ backgroundColor: '#abc', color: 'white' }}
    />
  )
}

const Rows = ({ content }: { content: ReactPdfTableCells }): JSX.Element => {
  return (
    <>
      {content.map((value, index) => (
        <Cell key={index} content={value} />
      ))}
    </>
  )
}

const Footer = ({ content }: { content: ReactPdfTableCell }): JSX.Element => {
  return <Text>{content}</Text>
}

/**
 * Table props
 */
export interface TableProps {
  data: ReactPdfTableData
}

/**
 * Table
 * @param props Props
 * @returns Table
 */
const Table = ({ data }: TableProps): JSX.Element => {
  const style = StyleSheet.create({
    view: {
      padding: '10px'
    },
    title: {
      fontSize: '16px',
      marginBottom: '10px'
    },
    subView: {
      display: 'flex',
      flexDirection: 'row',
      border: '1px solid black'
    },
    column: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      borderRight: '1px solid black'
    }
  })

  /**
   * Table render
   * @returns Render
   */
  const tableRender = useCallback((): JSX.Element[] => {
    // Row
    const rowData = data as ReactPdfTableRowData
    if (rowData.rows) {
      const columns: ReactPdfTableCells[] = []

      rowData.rows.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          if (!columns[colIndex]) columns[colIndex] = []
          columns[colIndex][rowIndex] = cell
        })
      })

      return columns.map((column, index) => (
        <View key={index} style={style.column}>
          <Header content={data.headers?.[index]} />
          <Rows content={column} />
        </View>
      ))
    }

    const columnData = data as ReactPdfTableColumnData
    return columnData.columns.map((column, index) => (
      <View key={index} style={style.column}>
        <Header content={data.headers?.[index]} />
        <Rows content={column} />
      </View>
    ))
  }, [])

  /**
   * Render
   */
  return (
    <View style={style.view}>
      {data.title && (
        <View style={style.title}>
          <Text>{data.title}</Text>
        </View>
      )}

      <View style={style.subView}>{tableRender()}</View>

      <Footer content={data.footer} />
    </View>
  )
}

export default Table
