import { StyleSheet } from '@react-pdf/renderer'

import { ReactPdfTableCell, ReactPdfTableStyle } from '../../index.d'

import Cell from '../cell'

/**
 * Header props
 */
export interface HeaderProps {
  content: ReactPdfTableCell
  style?: ReactPdfTableStyle['header']
}

/**
 * Header
 * @param props Props
 * @returns Header
 */
const Header = ({ content, style }: HeaderProps): JSX.Element => {
  // Style
  const internalStyle = StyleSheet.create({
    cell: {
      backgroundColor: '#abc',
      color: 'white',
      ...(style || {})
    }
  })

  /**
   * Render
   */
  return <Cell content={content} style={internalStyle.cell} />
}

export default Header
