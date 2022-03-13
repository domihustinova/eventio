import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useClickOutside } from 'react-click-outside-hook'

import { useAuthState, useAuthDispatch, logout } from '../utils/context'
import { HEADER_THEME, ROUTES } from '../utils/consts'
import { getInitials } from '../utils/helpers'
import useWindowSize from '../utils/hooks/use-window-size'

import { Wrapper } from '../components/common/common'
import { Header } from '../components/Header/Header'
import { EventsContainer } from '../containers/Events'
import { HeaderContainer } from '../containers/Header'
import { ReactComponent as DropdownArrow } from '../images/dropdown-arrow.svg'

export function Dashboard() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const [parentRef, isClickedOutside] = useClickOutside()
  const dispatch = useAuthDispatch()
  const {
    user: { firstName, lastName },
  } = useAuthState()
  const navigate = useNavigate()
  const windowSize = useWindowSize()
  const isMobile = windowSize.width < 360

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
        <Header.Wrapper ref={parentRef}>
          <Header.Account onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
            <Header.AccountImage>{getInitials(firstName, lastName)}</Header.AccountImage>
            {isMobile ? (
              <DropdownArrow />
            ) : (
              <Header.AccountName>
                {firstName} {lastName}
              </Header.AccountName>
            )}
            {isDropDownOpen && (
              <Header.Dropdown>
                <Header.DropdownButton onClick={handleLogout}>Logout</Header.DropdownButton>
              </Header.Dropdown>
            )}
          </Header.Account>
        </Header.Wrapper>
      </HeaderContainer>
      <EventsContainer />
    </Wrapper>
  )
}
