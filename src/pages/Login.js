import React from 'react'

import useWindowSize from '../utils/hooks/use-window-size'
import { HEADER_THEME, HEADER_TEXTS, ROUTES, BREAKPOINTS } from '../utils/consts'
import { Header } from '../components/Header/Header'

import { LayoutContainer } from '../containers/Layout'
import { LoginContainer } from '../containers/Login'

export function Login() {
  const windowSize = useWindowSize()
  const isMobile = windowSize.width < BREAKPOINTS.LAPTOP

  if (isMobile) {
    return (
      <LoginContainer>
        <Header.Logo theme={HEADER_THEME.DARK} />
        <Header.Cta
          text={HEADER_TEXTS.SIGN_UP_TEXT}
          action={HEADER_TEXTS.SIGN_UP_CTA}
          to={ROUTES.SIGNUP}
        />
      </LoginContainer>
    )
  }

  return (
    <LayoutContainer>
      <LoginContainer />
    </LayoutContainer>
  )
}
