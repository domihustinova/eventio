import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { HEADER_THEME, DEVICES_MAX } from '../../../utils/consts'

export const Container = styled.header`
  position: ${({ theme }) => (theme === HEADER_THEME.LIGHT ? 'absolute' : '')};
  width: 100%;
  height: 40px;
  padding: ${({ theme }) => (theme === HEADER_THEME.LIGHT ? '45px' : '')};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${DEVICES_MAX.MOBILE_SMALL} {
    margin-top: 24px;
  }
`

export const Frame = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media ${DEVICES_MAX.LAPTOP} {
    justify-content: flex-end;
  }
`

export const Logo = styled.span`
  width: 28px;
  height: 28px;

  .logo {
    fill: ${({ theme }) => (theme === HEADER_THEME.LIGHT ? '#ffffff' : '#323C46')};
  }

  @media ${DEVICES_MAX.LAPTOP} {
    position: absolute;
    top: 40px;
    left: 25px;
  }
`

export const CtaWrapper = styled.div``

export const CtaText = styled.span`
  font-size: 14px;
  line-height: 24px;
  color: #c9ced3;
`

export const CtaLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  line-height: 24px;
  color: #949ea8;
`

export const Close = styled(Link)`
  font-size: 16px;
  line-height: 48px;
  text-decoration: none;
  color: #323c46;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  svg {
    vertical-align: middle;
    margin-right: 13px;
  }

  &:hover {
    color: #565d5a;
  }
`

export const Account = styled.div`
  display: flex;
  align-items: center;
`

export const AccountImage = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: #d9dce1;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 40px;
  color: #949ea8;
  cursor: pointer;
`

export const AccountName = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
  color: #949ea8;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;

  svg {
    margin-left: 8px;
  }
`

export const Wrapper = styled.div``

export const Dropdown = styled.div`
  position: absolute;
  top: 90px;
  right: 30px;
  width: 162px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.198087);
  border-radius: 14px;
  padding: 16px;
`

export const DropdownButton = styled.button`
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  background-color: transparent;
  color: #9ca5af;
  cursor: pointer;
`
