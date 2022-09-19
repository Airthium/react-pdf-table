import { StyleSheet, Text } from '@react-pdf/renderer'

import { ReactPdfTableCell } from '../../index.d'

/**
 * Cell props
 */
export interface CellProps {
  content: ReactPdfTableCell
}

/**
 * Cell
 * @param props Props
 * @returns Cell
 */
const Cell = ({ content }: CellProps): JSX.Element => {
  // Style
  const style = StyleSheet.create({
    cell: {
      padding: '5px',
      borderBottom: '1px solid black'
    }
  })

  /**
   * Render
   */
  return <Text style={style.cell}>{content || ' '}</Text>
}

export default Cell
