import React from 'react'

import { Button, Container, Frame, Subtitle, Title } from './styles/ErrorPage'

export function ErrorPage({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Frame>{children}</Frame>
    </Container>
  )
}

ErrorPage.Title = function ErrorPageTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

ErrorPage.Subtitle = function ErrorPageSubtitle({ isError, children, ...restProps }) {
  return (
    <Subtitle isError={isError} {...restProps}>
      {children}
    </Subtitle>
  )
}

ErrorPage.Button = function ErrorPageButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>
}
