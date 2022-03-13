import React from 'react'
import { ReactComponent as EventioLogo } from '../../images/logo.svg'
import { ReactComponent as CloseIcon } from '../../images/close.svg'
import { ReactComponent as DropdownArrow } from '../../images/dropdown-arrow.svg'

import {
  Account,
  AccountImage,
  AccountName,
  Close,
  Container,
  CtaWrapper,
  CtaText,
  CtaLink,
  Dropdown,
  DropdownButton,
  Frame,
  Logo,
  Wrapper,
} from './styles/Header'

export function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return (
    <Logo {...restProps}>
      <EventioLogo />
      {children}
    </Logo>
  )
}

Header.Close = function HeaderClose({ to, children, ...restProps }) {
  return (
    <Close to={to} {...restProps}>
      <CloseIcon />
      {children}
    </Close>
  )
}

Header.Account = function HeaderAccount({ children, ...restProps }) {
  return <Account {...restProps}>{children}</Account>
}

Header.AccountImage = function HeaderAccountImage({ children, ...restProps }) {
  return <AccountImage {...restProps}>{children}</AccountImage>
}

Header.AccountName = function HeaderAccountName({ isMobile, children, ...restProps }) {
  return (
    <AccountName {...restProps}>
      {!isMobile && children}
      <DropdownArrow />
    </AccountName>
  )
}

Header.Cta = function HeaderCta({ text, action, to, ...restProps }) {
  return (
    <CtaWrapper {...restProps}>
      <CtaText text={text}>{text}</CtaText>{' '}
      <CtaLink action={action} to={to}>
        {action}
      </CtaLink>
    </CtaWrapper>
  )
}

Header.Wrapper = React.forwardRef((props, ref) => <Wrapper ref={ref}>{props.children}</Wrapper>)

Header.Wrapper.displayName = 'Wrapper'

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.DropdownButton = function HeaderDropdownButton({ children, ...restProps }) {
  return <DropdownButton {...restProps}>{children}</DropdownButton>
}
