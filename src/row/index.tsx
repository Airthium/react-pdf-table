import React from 'react'
import { View, StyleSheet, Text } from '@react-pdf/renderer'

import { ReactPdfTableRow } from '../../index.d'

export interface RowProps {
  rows?: ReactPdfTableRow[]
}

const Row = ({ rows }: RowProps) => {
  const styles = StyleSheet.create({
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

  return rows ? (
    <View style={styles.tableContainer}>
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
