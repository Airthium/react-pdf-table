import logo from './logo.svg';
import './App.css';
import React, { Fragment } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import Table from "./Components/Table";

function App() {

  const cleanedData = {
    
  }
  const data = {
    items: [
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
    ],
    headerFields: [
      "Champ 1",
      "Champ 2",
      "Champ 3",
      "Champ 4",
      "Champ 5",
      "Champ 6",
    ]
  }
  return (
    <Fragment>
      <PDFViewer width="1000" height="600">
        <Table data={data} />
      </PDFViewer>
    </Fragment>
  );
}

export default App;
