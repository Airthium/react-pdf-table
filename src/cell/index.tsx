import React from 'react'
import { StyleSheet, Text } from '@react-pdf/renderer'

const Cell = ({ content }) => {
  const styles = StyleSheet.create({
    cell: {
      border: '1px solid black'
    }
  })

  return <Text style={styles.cell}>{cellData}</Text>
}

export default Cell
