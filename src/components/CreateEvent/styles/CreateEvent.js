import styled from 'styled-components/macro'
import { DEVICES_MAX } from '../../../utils/consts'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 32px;
  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;
  margin-top: 100px;

  @media ${DEVICES_MAX.MOBILE_SMALL} {
    padding: 16px;
    margin-top: 34px;
    margin-bottom: 34px;
  }
`

export const Error = styled.div`
  margin-top: 20px;
  font-size: 18px;
  text-align: center;
  line-height: 24px;
  color: #ff4081;
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
  color: #949ea8;

  @media ${DEVICES_MAX.MOBILE_SMALL} {
    font-size: 14px;
  }
`

export const Submit = styled.button`
  height: 57px;
  width: 240px;
  margin-top: 40px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
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
  width: 416px;
  height: 33px;
  border: none;
  font-size: 18px;
  line-height: 24px;
  color: #323c46;
  border-bottom: 1px solid #dae1e7;
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

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
  margin-top: 40px;
`

export const Frame = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
