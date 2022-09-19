import { View, StyleSheet } from '@react-pdf/renderer'

import { ReactPdfTableColumn } from '../../index.d'

import Cell from '../cell'

/**
 * Header props
 */
export interface HeaderProps {
  headers?: ReactPdfTableColumn
}

/**
 * Header
 * @param props Props
 * @returns Header
 */
const Header = ({ headers }: HeaderProps): JSX.Element | null => {
  // Style
  const style = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  })

  /**
   * Render
   */
  return headers ? (
    <View style={style.row}>
      {headers.map((field, index) => (
        <Cell key={index} content={field} />
      ))}
    </View>
  ) : null
}

export default Header
