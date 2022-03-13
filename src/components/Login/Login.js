import React from 'react'
import {
  Container,
  Frame,
  Form,
  Input,
  Label,
  Img,
  Submit,
  Subtitle,
  Title,
  Wrapper,
} from './styles/Login'
import show from '../../images/show.svg'

export function Login({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Login.Frame = function LoginFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

Login.Title = function LoginTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Login.Subtitle = function LoginSubtitle({ isError, children, ...restProps }) {
  return (
    <Subtitle isError={isError} {...restProps}>
      {children}
    </Subtitle>
  )
}

Login.Form = function LoginForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>
}

Login.Submit = function LoginSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>
}

Login.Input = function LoginInput({ id, name, label, type, error, callback, ...restProps }) {
  return (
    <Wrapper htmlFor={id}>
      <Input id={id} name={name} label={label} type={type} error={error} required {...restProps} />
      <Label htmlFor={id}>{label}</Label>
      {name === 'password' && <Img alt="show" src={show} onClick={callback} />}
    </Wrapper>
  )
}
