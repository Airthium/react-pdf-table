import { render } from '@testing-library/react'

import Rows from '..'

describe('Rows', () => {
  const rows = ['row1', 'row2']
  test('content', () => {
    const { unmount } = render(<Rows content={rows} />)

    unmount()
  })

  test('style', () => {
    const { unmount } = render(<Rows content={rows} style={{}} />)

    unmount()
  })
})
