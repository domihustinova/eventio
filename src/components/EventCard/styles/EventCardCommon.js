import styled from 'styled-components/macro'
import { DEVICES_MAX, DEVICES_MIN } from '../../../utils/consts'

export const CommonOwner = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: #7d7878;
`

export const CommonTitle = styled.h2`
  font-weight: normal;
  line-height: 32px;
  color: #323c46;

  @media ${DEVICES_MIN.LAPTOP} {
    line-height: 48px;
  }
`

export const CommonDescription = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #949ea8;

  @media ${DEVICES_MAX.TABLET} {
    margin-top: 32px;
  }
`

export const Attendees = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 24px;
  margin-right: ${({ isMobile }) => (isMobile ? '' : '20px')};
  color: #949ea8;
`

export const CommonDate = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: #cacdd0;
`

export const ActionButton = styled.button`
  width: 100px;
  height: 32px;
  background-color: ${({ isAttending }) => (isAttending ? '#FF4081' : '#22d486')};
  border: none;
  border-radius: 4px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 1px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ isAttending }) => (isAttending ? '#E73370' : '#20bd78')};
  }
`
