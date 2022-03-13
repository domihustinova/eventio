import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser, useAuthState, useAuthDispatch } from '../utils/context'
import { LOGIN_SUBTITLE } from '../utils/consts'
import { Login } from '../components/Login/Login'

export function LoginContainer({ children }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayPassword, setDisplayPassword] = useState(false)
  const { loading, errorMessage } = useAuthState()
  const dispatch = useAuthDispatch()
  const navigate = useNavigate()

  const handleShowClick = () => {
    setDisplayPassword(!displayPassword)
  }

  const handleLogin = async event => {
    event.preventDefault()
    try {
      const response = await loginUser(dispatch, { email, password })
      if (!response.id) return
      navigate('/dashboard')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Login>
      <Login.Frame>
        <Login.Title>Sign in to Eventio.</Login.Title>
        <Login.Subtitle isError={errorMessage}>
          {errorMessage ? LOGIN_SUBTITLE.ERROR : LOGIN_SUBTITLE.DEFAULT}
        </Login.Subtitle>
        <Login.Form onSubmit={handleLogin} method="POST">
          <Login.Input
            id="email"
            name="email"
            label="Email"
            value={email}
            error={errorMessage}
            autoComplete="off"
            onChange={({ target }) => setEmail(target.value)}
          />
          <Login.Input
            id="password"
            name="password"
            type={displayPassword ? 'text' : 'password'}
            label="Password"
            autoComplete="off"
            value={password}
            error={errorMessage}
            onChange={({ target }) => setPassword(target.value)}
            callback={handleShowClick}
            show={displayPassword}
          />
          {children}
          <Login.Submit type="submit" disabled={loading}>
            SIGN IN
          </Login.Submit>
        </Login.Form>
      </Login.Frame>
    </Login>
  )
}
