/** @module Footer */

import { StyleSheet, Text, View } from '@react-pdf/renderer'

import { ReactPdfTableCell, ReactPdfTableStyle } from '../../index.d'

export interface FooterProps {
  content: ReactPdfTableCell
  style?: ReactPdfTableStyle['footer']
}

/**
 * Footer
 * @param props Props
 * @returns Footer
 */
const Footer = ({ content, style }: FooterProps): JSX.Element => {
  // Style
  const internalStyle = StyleSheet.create({
    footer: {
      padding: '5px',
      ...(style || {})
    }
  })

  /**
   * Render
   */
  return (
    <View style={internalStyle.footer}>
      <Text>{content}</Text>
    </View>
  )
}

export default Footer
