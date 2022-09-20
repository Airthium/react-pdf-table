import { ReactPdfTableCells, ReactPdfTableStyle } from '../../index.d'
import Cell from '../cell'

/**
 * Row props
 */
export interface RowsProps {
  content: ReactPdfTableCells
  style?: ReactPdfTableStyle['cell']
}

/**
 * Row
 * @param prop Props
 * @returns Row
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
