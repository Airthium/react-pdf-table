import { StyleSheet, Text } from '@react-pdf/renderer'

import { ReactPdfTableRow } from '../../index.d'

/**
 * Cell props
 */
export interface CellProps {
  content: ReactPdfTableRow[0]
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
      border: '1px solid black'
    }
  })

  /**
   * Render
   */
  return <Text style={style.cell}>{content}</Text>
}

export default Cell
