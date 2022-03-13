import styled from 'styled-components/macro'

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1110px) {
    height: 100vh;
    text-align: center;
    padding: 32px;
  }
`

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  max-width: 522px;

  @media (max-width: 1110px) {
    align-items: center;
  }
`

export const Title = styled.h1`
  font-weight: normal;
  font-size: 28px;
  line-height: 48px;
  color: #323c46;

  @media (max-width: 360px) {
    font-size: 22px;
  }
`

export const Subtitle = styled.h2`
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #949ea8;

  @media (max-width: 360px) {
    font-size: 14px;
  }
`

export const Button = styled.button`
  margin-top: 40px;
  height: 57px;
  width: 240px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 1px;
  background-color: #323c46;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #565d5a;
  }
`
