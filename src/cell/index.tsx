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
      display: 'flex',
      alignItems: 'center',
      padding: '5px',
      borderBottom: '1px solid black',
      height: '30px',
      ...(style || {})
    }
  })

  /**
   * Render
   */
  return <Text style={internalStyle.cell}>{content || ' '}</Text>
}

export default Cell
