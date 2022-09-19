import React from 'react'
import { View, StyleSheet, Text } from '@react-pdf/renderer'

import { ReactPdfTableCells } from '../../index.d'

/**
 * Row props
 */
export interface RowProps {
  rows?: ReactPdfTableCells[]
}

/**
 * Row
 * @param prop Props
 * @returns Row
 */
const Row = ({ rows }: RowProps): JSX.Element | null => {
  // Style
  const style = StyleSheet.create({
    tableContainer: {
      flexDirection: 'column',
      flexWrap: 'wrap',
      border: '1px solid blue',
      paddingLeft: '5px',
      paddingRight: '5px'
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      border: '1px solid black'
    }
  })

  /**
   * Render
   */
  return rows ? (
    <View style={style.tableContainer}>
      {rows.map((row, index) => (
        <>
          <Text>{row}</Text>
          <Text>{row}</Text>
          <Text>{row}</Text>
        </>
      ))}
    </View>
  ) : null
}

export default Row
