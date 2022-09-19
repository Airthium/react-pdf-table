import React from 'react'
import { StyleSheet, Text } from '@react-pdf/renderer'

import { ReactPdfTableRow } from '../../index.d'

export interface CellProps {
  content: ReactPdfTableRow[0]
}

const Cell = ({ content }: CellProps) => {
  const styles = StyleSheet.create({
    cell: {
      border: '1px solid black'
    }
  })

  return <Text style={styles.cell}>{content}</Text>
}

export default Cell
