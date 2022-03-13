import React from 'react'

import useWindowSize from '../utils/hooks/use-window-size'
import { HEADER_THEME, ROUTES } from '../utils/consts'

import { Wrapper } from '../components/common/common'
import { Header } from '../components/Header/Header'
import { HeaderContainer } from '../containers/Header'
import { CreateEventContainer } from '../containers/CreateEvent'

export function Create() {
  const windowSize = useWindowSize()
  const isMobile = windowSize.width < 360

  return (
    <Wrapper>
      <HeaderContainer theme={HEADER_THEME.DARK}>
        <Header.Close to={ROUTES.DASHBOARD}>{isMobile ? '' : 'Close'}</Header.Close>
      </HeaderContainer>
      <CreateEventContainer />
    </Wrapper>
  )
}
