/** @module Rows */

import { ReactPdfTableCells, ReactPdfTableStyle } from '../../index.d'

import Cell from '../cell'

/**
 * Rows props
 */
export interface RowsProps {
  content: ReactPdfTableCells
  style?: ReactPdfTableStyle['cell']
}

/**
 * Rows
 * @param prop Props
 * @returns Rows
 */
const Rows = ({ content, style }: RowsProps): JSX.Element => {
  /**
   * Render
   */
  return (
    <>
      {content.map((value, index) => (
        <Cell key={index} content={value} style={style} />
      ))}
    </>
  )
}

export default Rows
