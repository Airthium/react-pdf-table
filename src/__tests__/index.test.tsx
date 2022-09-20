import Table from '..'
import { render } from '@testing-library/react'

jest.mock('../header', () => () => <div />)
jest.mock('../rows', () => () => <div />)
jest.mock('../footer', () => () => <div />)

describe('Table', () => {
  test('column data', () => {
    const data = {
      title: 'Table title',
      headers: ['head 1', 'head 2', 'head 3'],
      columns: [
        ['in head 1 - 1', 'in head 1 - 2', 'in head 1 - 3'],
        ['in head 2 - 1', 'in head 2 - 2', 'in head 2 - 3'],
        ['in head 2 - 1', 'in head 3 - 2', 'in head 3 - 3']
      ],
      footer: 'footer'
    }

    const { unmount } = render(<Table data={data} />)

    unmount()
  })

  test('row data', () => {
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

    const { unmount } = render(<Table data={data} />)

    unmount()
  })

  test('row data with style', () => {
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

    const style = {
      container: {},
      title: {},
      table: {},
      header: {},
      column: {},
      cell: {},
      footer: {}
    }

    const { unmount } = render(<Table data={data} style={style} />)

    unmount()
  })
})
