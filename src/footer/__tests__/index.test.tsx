import { render } from '@testing-library/react'

import Footer from '..'

describe('Footer', () => {
  test('content', () => {
    const { unmount } = render(<Footer content="content" />)

    unmount()
  })

  test('style', () => {
    const { unmount } = render(<Footer content="content" style={{}} />)

    unmount()
  })
})
