import { StyleSheet, Text } from '@react-pdf/renderer'

const Cell = ({ cellData }) => {
  const styles = StyleSheet.create({
    cell: {
      border: '1px solid black'
    }
  })

  return <Text style={styles.cell}>{cellData}</Text>
}

export default Cell
