import { render } from '@testing-library/react'

import Cell from '..'

describe('Cell', () => {
  test('empty', () => {
    const { unmount } = render(<Cell content="" />)

    unmount()
  })

  test('content', () => {
    const { unmount } = render(<Cell content="content" />)

    unmount()
  })

  test('style', () => {
    const { unmount } = render(<Cell content="content" style={{}} />)

    unmount()
  })
})
