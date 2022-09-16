import React, { Fragment } from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    border: "1px solid blue",
    paddingLeft:"5px",
    paddingRight:"5px"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    border: "1px solid black",
  }
});

const TableRow = ({ data }) => {
  const rows = data.items.map((item, index) => (
    <View style={styles.row} key={index}>
      <Text>{item}</Text>
      <Text>{item}</Text>
      <Text>{item}</Text>
    </View>
  ));

  return (
    <View style={styles.tableContainer}>
      {/*<TableHeader />*/}
      <Fragment>{rows}</Fragment>
      {/*<TableFooter />*/}
    </View>
  );
};

export default TableRow;
