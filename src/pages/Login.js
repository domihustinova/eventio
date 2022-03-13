import React from 'react'
import styled from 'styled-components/macro'
import storm from '../images/storm.png'

import { HEADER_THEME } from '../utils/consts'
import { Header } from '../components/Header/Header'
import { HeaderContainer } from '../containers/Header'

const Layout = styled.div`
  display: flex;
`

const Quote = styled.div`
  position: absolute;
  bottom: 150px;
  left: 75px;
  font-family: PlayfairDisplay;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: #ffffff;
  max-width: 310px;
`

const Img = styled.div`
  width: 480px;
  height: 100vh;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
`

export function Login() {
  return (
    <Layout>
      <HeaderContainer theme={HEADER_THEME.LIGHT}>
        <Header.Text>
          Don&apos;t have account? <span>SIGN UP</span>
        </Header.Text>
      </HeaderContainer>
      <div>
        <Img src={storm} />
        <Quote>“Great, kid. Don’t get cocky.”</Quote>
      </div>
    </Layout>
  )
}
