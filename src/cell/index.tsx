import { StyleSheet, Text } from '@react-pdf/renderer'

import { ReactPdfTableColumn } from '../../index.d'

/**
 * Cell props
 */
export interface CellProps {
  content: ReactPdfTableColumn[0]
}

/**
 * Cell
 * @param props Props
 * @returns Cell
 */
const Cell = ({ content }: CellProps): JSX.Element => {
  // Style
  const style = StyleSheet.create({
    cell: {}
  })

  /**
   * Render
   */
  return <Text style={style.cell}>{content}</Text>
}

export default Cell
