import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  }
});

const TableRow = ({ data }) => {
  const rows = data.items.map((item, index) => (
    <View style={styles.row} key={index}>
      <Text>{"Un exemple de contenu"}</Text>
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
