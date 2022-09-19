import React from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'

import { ReactPdfTableRow } from '../../index.d'

import Cell from '../cell'

export interface HeaderProps {
  headers: ReactPdfTableRow
}

const Header = ({ headers }: HeaderProps) => {
  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      border: '1px solid black'
    }
  })

  return (
    <View style={styles.row}>
      {headers.map((field, index) => (
        <Cell key={index} content={field} />
      ))}
    </View>
  )
}

export default Header
