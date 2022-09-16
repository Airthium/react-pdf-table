export type Column = (string | JSX.Element | undefined)[];

export interface Data {
  title?: string | JSX.Element;
  headers?: Column;
  rows?: Column[];
  footer?: Column;
}
