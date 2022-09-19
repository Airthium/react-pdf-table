import { StyleSheet, Text, View } from '@react-pdf/renderer'

import {
  ReactPdfTableCell,
  ReactPdfTableColumn,
  ReactPdfTableData
} from '../index.d'
import Cell from './cell'

const Header = ({ content }: { content: ReactPdfTableCell }): JSX.Element => {
  return <Cell content={content} />
}

const Rows = ({ content }: { content: ReactPdfTableColumn }): JSX.Element => {
  return (
    <>
      {content.map((value) => (
        <Cell content={value} />
      ))}
    </>
  )
}

const Footer = ({ content }: { content: ReactPdfTableCell }): JSX.Element => {
  return <Cell content={content} />
}

/**
 * Table props
 */
export interface TableProps {
  data: ReactPdfTableData
}

/**
 * Table
 * @param props Props
 * @returns Table
 */
const Table = ({ data }: TableProps): JSX.Element => {
  const style = StyleSheet.create({
    view: {
      padding: '10px'
    },
    title: {
      fontSize: '16px',
      marginBottom: '10px'
    },
    subView: {
      display: 'flex',
      flexDirection: 'row'
    },
    column: {
      display: 'flex',
      flexDirection: 'column'
    }
  })

  /**
   * Render
   */
  return (
    <View style={style.view}>
      {data.title && (
        <View style={style.title}>
          <Text>{data.title}</Text>
        </View>
      )}

      <View style={style.subView}>
        {data.columns?.map((column, index) => (
          <View key={index} style={style.column}>
            <Header content={data.headers?.[index]} />
            <Rows content={column} />
            <Footer content={data.footer?.[index]} />
          </View>
        ))}
      </View>
    </View>
  )
}

export default Table
