import styled from 'styled-components/macro'
import { DEVICES_MAX } from '../../utils/consts'

export const Wrapper = styled.div`
  background-color: #f2f2f2;
  padding: 40px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${DEVICES_MAX.MOBILE_SMALL} {
    padding: 8px;
  }
`
