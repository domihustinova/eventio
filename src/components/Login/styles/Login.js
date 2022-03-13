import styled from 'styled-components/macro'
import { DEVICES_MAX } from '../../../utils/consts'

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${DEVICES_MAX.LAPTOP} {
    height: 100vh;
  }
`

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${DEVICES_MAX.LAPTOP} {
    align-items: center;
  }
`

export const Title = styled.h1`
  font-weight: normal;
  font-size: 28px;
  line-height: 48px;
  color: #323c46;

  @media ${DEVICES_MAX.MOBILE_SMALL} {
    font-size: 22px;
  }
`

export const Subtitle = styled.h2`
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: ${({ isError }) => (isError ? '#FF4081' : '#949ea8')};
  margin-bottom: 30px;

  @media ${DEVICES_MAX.MOBILE_SMALL} {
    font-size: 14px;
  }
`

export const Submit = styled.button`
  margin-top: 30px;
  height: 57px;
  width: 240px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 1px;
  background-color: #22d486;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #20bd78;
  }
`

export const Input = styled.input`
  display: block;
  width: 480px;
  height: 33px;
  border: none;
  font-size: 18px;
  line-height: 24px;
  color: #323c46;
  border-bottom: 1px solid ${({ error }) => (error ? '#FF4081' : '#dae1e7')};
  transition: border 0.3s ease-in-out;

  &[type='password'] {
    font-family: AppleSymbols;
    font-size: 33px;
    letter-spacing: 3px;
    line-height: 24px;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid #323c46;
  }

  @media ${DEVICES_MAX.TABLET} {
    width: 270px;
    font-size: 18px;
  }
`

export const Label = styled.label`
  color: #c9ced3;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  top: 0px;
  transition: 0.2s ease all;
  input:focus ~ &,
  input:valid ~ &,
  input:-webkit-autofill ~ & {
    top: -18px;
    font-size: 14px;
    color: #d2d6da;
  }

  @media ${DEVICES_MAX.MOBILE_SMALL} {
    font-size: 16px;
  }
`

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`

export const Img = styled.img`
  position: absolute;
  top: 9px;
  right: 0px;
  width: 22px;
  height: 15px;
  cursor: pointer;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media ${DEVICES_MAX.LAPTOP} {
    align-items: center;
  }
`
