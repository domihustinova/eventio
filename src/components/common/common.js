import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  background-color: #f2f2f2;
  padding: 40px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 360px) {
    padding: 8px;
    height: 100%;
  }
`
