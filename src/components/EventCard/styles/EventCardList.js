import styled from 'styled-components/macro'
import { CommonDate, CommonDescription, CommonTitle } from './EventCardCommon'

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  width: 1200px;
  height: 72px;
  margin-bottom: 16px;
  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;
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
`
