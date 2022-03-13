import React from 'react'
import storm from '../../images/storm.png'

import { Container, Img, QuoteWrapper, QuoteText, QuoteAuthor } from './styles/Layout'

export function Layout({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Layout.LeftPanel = function LayoutLeftPanel({ children, ...restProps }) {
  return <div {...restProps}>{children}</div>
}

Layout.Quote = function LayoutQuote({ text, author, ...restProps }) {
  return (
    <QuoteWrapper {...restProps}>
      <QuoteText>{text}</QuoteText>
      <QuoteAuthor>{author}</QuoteAuthor>
    </QuoteWrapper>
  )
}

Layout.Img = function LayoutImg({ children, ...restProps }) {
  return (
    <Img src={storm} {...restProps}>
      {children}
    </Img>
  )
}
