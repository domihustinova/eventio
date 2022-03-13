import styled from 'styled-components/macro'
import { DEVICES_MAX, DEVICES_MIN } from '../../../utils/consts'

import { CommonDate, CommonOwner, CommonTitle } from './EventCardCommon'

export const Card = styled.div`
  position: relative;
  width: 390px;
  height: 296px;
  padding: 32px;
  background-color: #ffffff;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;
  margin-right: 15px;
  margin-bottom: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${DEVICES_MAX.MOBILE_SMALL} {
    margin-right: 0px;
  }

  @media ${DEVICES_MAX.TABLET} {
    width: 304px;
    padding: 24px;
  }
`
export const Title = styled(CommonTitle)`
  font-size: 22px;

  @media ${DEVICES_MIN.TABLET} {
    margin-bottom: 32px;
  }
`

export const Owner = styled(CommonOwner)`
  @media ${DEVICES_MIN.TABLET} {
    position: absolute;
    top: 100px;
  }
`

export const Date = styled(CommonDate)`
  margin-bottom: 10px;
`

export const Content = styled.div``

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`

export const Img = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`
