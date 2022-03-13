import React from 'react'

import { HEADER_THEME, LAYOUT_TEXTS, HEADER_TEXTS, ROUTES } from '../utils/consts'
import { Layout } from '../components/Layout/Layout'
import { Header } from '../components/Header/Header'
import { HeaderContainer } from '../containers/Header'

export function LayoutContainer({ children }) {
  return (
    <Layout>
      <HeaderContainer theme={HEADER_THEME.LIGHT}>
        <Header.Cta
          text={HEADER_TEXTS.SIGN_UP_TEXT}
          action={HEADER_TEXTS.SIGN_UP_CTA}
          to={ROUTES.SIGNUP}
        />
      </HeaderContainer>
      <Layout.LeftPanel>
        <Layout.Img />
        <Layout.Quote text={LAYOUT_TEXTS.TEXT} author={LAYOUT_TEXTS.AUTHOR} />
      </Layout.LeftPanel>
      {children}
    </Layout>
  )
}
