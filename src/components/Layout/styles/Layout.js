import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
`
export const QuoteWrapper = styled.div`
  position: absolute;
  bottom: 150px;
  left: 75px;
  text-align: center;
`

export const QuoteText = styled.p`
  font-family: PlayfairDisplay;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: #ffffff;
  width: 300px;
`

export const QuoteAuthor = styled.div`
  margin-top: 40px;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #949ea8;
`

export const Img = styled.div`
  width: 480px;
  height: 100vh;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
`
