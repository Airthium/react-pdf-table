import React, { Fragment } from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";
import TableCell from "../TableCell";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid black",
  },
});

const TableHeader = ({ fields }) => {
  const row = (
    <View style={styles.row} >
      {fields.map((field, index) => {
        return <TableCell cellData={field} key={index}/>;
      })}
    </View>
  );

  return <Fragment>{row}</Fragment>;
};

export default TableHeader;
