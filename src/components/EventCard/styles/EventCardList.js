import styled from 'styled-components/macro'
import { DEVICES_MAX } from '../../../utils/consts'
import { CommonDate, CommonDescription, CommonTitle } from './EventCardCommon'

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  height: 72px;
  margin-bottom: 16px;
  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;

  @media ${DEVICES_MAX.TABLET} {
    width: 304px;
    height: 145px;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Title = styled(CommonTitle)`
  font-size: 18px;
`

export const Date = styled(CommonDate)``

export const Description = styled(CommonDescription)`
  max-width: 240px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media ${DEVICES_MAX.TABLET} {
    margin-top: 0px;
  }
`

export const Footer = styled.div`
  width: ${({ isMobile }) => (isMobile ? '100%' : '')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`
