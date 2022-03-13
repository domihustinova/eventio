import React from 'react'

import useWindowSize from '../utils/hooks/use-window-size'
import { HEADER_THEME } from '../utils/consts'
import { Header } from '../components/Header/Header'
import { LayoutContainer } from '../containers/Layout'
import { ErrorPageContainer } from '../containers/ErrorPage'

export function PageNotFound() {
  const windowSize = useWindowSize()
  const isMobile = windowSize.width < 1110

  if (isMobile) {
    return (
      <ErrorPageContainer>
        <Header.Logo theme={HEADER_THEME.DARK} />
      </ErrorPageContainer>
    )
  }

  return (
    <LayoutContainer>
      <ErrorPageContainer />
    </LayoutContainer>
  )
}
