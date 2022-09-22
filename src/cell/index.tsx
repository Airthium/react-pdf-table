/** @module Cell */

import ReactPDF, { StyleSheet, Text } from '@react-pdf/renderer'

import { ReactPdfTableCell } from '../../index.d'

/**
 * Cell props
 */
export interface CellProps {
  content: ReactPdfTableCell
  style?: ReactPDF.Styles['key']
}

/**
 * Cell
 * @param props Props
 * @returns Cell
 */
const Cell = ({ content, style }: CellProps): JSX.Element => {
  // Style
  const internalStyle = StyleSheet.create({
    cell: {
      padding: '5px',
      borderBottom: '1px solid black',
      ...(style || {}),
      height: '30px'
    }
  })

  /**
   * Render
   */
  return <Text style={internalStyle.cell}>{content || ' '}</Text>
}

export default Cell
