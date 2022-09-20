import { render } from '@testing-library/react'

import Header from '..'

describe('Footer', () => {
  test('content', () => {
    const { unmount } = render(<Header content="content" />)

    unmount()
  })

  test('style', () => {
    const { unmount } = render(<Header content="content" style={{}} />)

    unmount()
  })
})
