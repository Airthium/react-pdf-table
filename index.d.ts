export type ReactPdfTableRow = (string | JSX.Element | undefined)[];

export interface ReactPdfTableData {
  title?: string | JSX.Element;
  headers?: ReactPdfTableRow;
  rows?: ReactPdfTableRow[];
  footer?: ReactPdfTableRow;
}
