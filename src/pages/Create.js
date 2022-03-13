import React from 'react'

import { HEADER_THEME } from '../utils/consts'
import { Wrapper } from '../components/common/common'
import { Header } from '../components/Header/Header'
import { HeaderContainer } from '../containers/Header'
import { CreateEventContainer } from '../containers/CreateEvent'

export function Create() {
  return (
    <Wrapper>
      <HeaderContainer theme={HEADER_THEME.DARK}>
        <Header.Close to="/dashboard">Close</Header.Close>
      </HeaderContainer>
      <CreateEventContainer />
    </Wrapper>
  )
}
