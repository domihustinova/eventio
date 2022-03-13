import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useClickOutside } from 'react-click-outside-hook'

import { useAuthState, useAuthDispatch, logout } from '../utils/context'
import { HEADER_THEME, ROUTES } from '../utils/consts'
import { getInitials } from '../utils/helpers'

import { Wrapper } from '../components/common/common'
import { Header } from '../components/Header/Header'
import { EventsContainer } from '../containers/Events'
import { HeaderContainer } from '../containers/Header'

export function Dashboard() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const [parentRef, isClickedOutside] = useClickOutside()
  const dispatch = useAuthDispatch()
  const {
    user: { firstName, lastName },
  } = useAuthState()
  const navigate = useNavigate()

  useEffect(() => {
    if (isClickedOutside) setIsDropDownOpen(false)
  }, [isClickedOutside])

  const handleLogout = () => {
    logout(dispatch)
    navigate(ROUTES.LOGIN)
  }

  return (
    <Wrapper>
      <HeaderContainer theme={HEADER_THEME.DARK}>
        <Header.Account>
          <Header.AccountImage>{getInitials(firstName, lastName)}</Header.AccountImage>
          <Header.AccountName onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
            {firstName} {lastName}
          </Header.AccountName>
          {isDropDownOpen && (
            <Header.Wrapper ref={parentRef}>
              <Header.Dropdown>
                <Header.DropdownButton onClick={handleLogout}>Logout</Header.DropdownButton>
              </Header.Dropdown>
            </Header.Wrapper>
          )}
        </Header.Account>
      </HeaderContainer>
      <EventsContainer />
    </Wrapper>
  )
}
