import React from "react";
import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import TableRow from "../tableRow/tableRow";

const styles = StyleSheet.create({
  page: {
    fontSize: 11,
    flexDirection: "column",
  },
});

const Table = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <TableRow data={data} />
    </Page>
  </Document>
);

export default Table;