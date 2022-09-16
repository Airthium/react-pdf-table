import React from "react";
import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import TableRow from "../TableRow";
import TableHeader from "../TableHeader";

const styles = StyleSheet.create({
  page: {
    fontSize: 11,
    flexDirection: "column",
  },
});

const Table = ({ title: string, data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <TableHeader fields={data.headerFields} />
      <TableRow data={data} />
    </Page>
  </Document>
);

export default Table;