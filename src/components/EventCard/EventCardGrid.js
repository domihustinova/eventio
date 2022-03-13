import React from 'react'
import { ActionButton, Attendees, CommonDescription } from './styles/EventCardCommon'
import { Card, Content, Date, Footer, Img, Owner, Title } from './styles/EventCardGrid'

import person from '../../images/person.svg'

export function EventCardGrid({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>
}

EventCardGrid.Title = function EventCardGridTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

EventCardGrid.Description = function EventCardGridDescription({ children, ...restProps }) {
  return <CommonDescription {...restProps}>{children}</CommonDescription>
}

EventCardGrid.Date = function EventCardGridDate({ children, ...restProps }) {
  return <Date {...restProps}>{children}</Date>
}

EventCardGrid.Owner = function EventCardGridOwner({ children, ...restProps }) {
  return <Owner {...restProps}>{children}</Owner>
}

EventCardGrid.Attendees = function EventCardGridAttendees({ children, ...restProps }) {
  return (
    <Attendees {...restProps}>
      <Img alt="person" src={person} />
      {children}
    </Attendees>
  )
}

EventCardGrid.ActionButton = function EventCardGridActionButton({ children, ...restProps }) {
  return <ActionButton {...restProps}>{children}</ActionButton>
}

EventCardGrid.Footer = function EventCardGridFooter({ children, ...restProps }) {
  return <Footer {...restProps}>{children}</Footer>
}

EventCardGrid.Content = function EventCardGridContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>
}
