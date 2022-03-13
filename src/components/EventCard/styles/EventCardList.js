import styled from 'styled-components/macro'
import { CommonDate, CommonDescription, CommonTitle } from './EventCardCommon'

export const Card = styled.div`
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

  @media (max-width: 360px) {
    width: 304px;
    height: 145px;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: 1250px) {
    width: 1200px;
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

  @media (max-width: 360px) {
    margin-top: 0px;
  }
`

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`
