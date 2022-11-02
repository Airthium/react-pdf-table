[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Airthium_react-pdf-table&metric=alert_status&token=e529d930e12d2204a38abc165e9416d90bbdf058)](https://sonarcloud.io/summary/new_code?id=Airthium_react-pdf-table)
[![Node](https://github.com/Airthium/react-pdf-table/actions/workflows/check.yml/badge.svg)](https://github.com/Airthium/react-pdf-table/actions/workflows/check.yml)

# React-Pdf Table

@react-pdf/renderer is a React renderer for creating PDF files on the browser and server.
With react-pdf-table, create custom tables and add them to your pdf content.

# How to install

Add the package, whether with yarn or npm :

- npm install react-pdf-table
- yarn add react-pdf-table

# How to use

Using an import, add the Table component to your file.

```jsx
import Table from 'react-pdf-table'
```

Make sure to have a dataset, with either **rows** or **columns**

```jsx
const data = {
  title: 'Table title',
  headers: ['head 1', 'head 2', 'head 3'],
  rows: [
    ['in head 1 - 1', 'in head 2 - 1', 'in head 3 - 1'],
    ['in head 1 - 2', 'in head 2 - 2', 'in head 3 - 2'],
    ['in head 1 - 3', 'in head 2 - 3', 'in head 3 - 3']
  ],
  footer: 'footer'
}
```

Call it with your data, following react-pdf's architecture ( Can be found on https://react-pdf.org/ ).

Here is a basic example :

```jsx
<PDFViewer width={'100%'} height={'800px'}>
  <Document>
    <Page size="A4">
      <Table data={data} />
    </Page>
  </Document>
</PDFViewer>
```

# Style

This library is provided with custom styling options.
All CSS properties can be found on https://react-pdf.org/styling#valid-css-properties.

```jsx
<Table
  data={data}
  style={{
    container: { backgroundColor: 'tomato' },
    cell: {
      textAlign: 'center',
      color: 'white'
    }
  }}
/>
```

Custom styling is enabled on :

- container
- title
- table
- header
- cell
- footer
