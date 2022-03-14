import React from 'react'
import {
  Container,
  Error,
  Frame,
  Input,
  Label,
  Submit,
  Subtitle,
  Title,
  Wrapper,
} from './styles/CreateEvent'

export function CreateEvent({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

CreateEvent.Error = function CreateEventTitle({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>
}

CreateEvent.Title = function CreateEventTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

CreateEvent.Subtitle = function CreateEventSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}

CreateEvent.Frame = function CreateEventFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

CreateEvent.Submit = function CreateEventSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>
}

CreateEvent.Input = function CreateEventInput({ id, name, label, type, ...restProps }) {
  return (
    <Wrapper htmlFor={id}>
      <Input id={id} name={name} label={label} type={type} required {...restProps} />
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  )
}
