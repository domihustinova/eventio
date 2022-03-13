import React from 'react'
import { Header } from '../components/Header/Header'

export function HeaderContainer({ theme, children }) {
  return (
    <Header theme={theme}>
      <Header.Frame>
        <Header.Logo theme={theme} />
        {children}
      </Header.Frame>
    </Header>
  )
}
