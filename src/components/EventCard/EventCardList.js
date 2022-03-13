import React from 'react'
import { ActionButton, Attendees, CommonOwner } from './styles/EventCardCommon'
import { Card, Date, Description, Footer, Title } from './styles/EventCardList'

export function EventCardList({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>
}

EventCardList.Title = function EventCardListTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

EventCardList.Description = function EventCardListDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>
}

EventCardList.Date = function EventCardListDate({ children, ...restProps }) {
  return <Date {...restProps}>{children}</Date>
}

EventCardList.Owner = function EventCardListOwner({ children, ...restProps }) {
  return <CommonOwner {...restProps}>{children}</CommonOwner>
}

EventCardList.Attendees = function EventCardListAttendees({ children, ...restProps }) {
  return <Attendees {...restProps}>{children}</Attendees>
}

EventCardList.ActionButton = function EventCardListActionButton({ children, ...restProps }) {
  return <ActionButton {...restProps}>{children}</ActionButton>
}

EventCardList.Footer = function EventCardListFooter({ children, ...restProps }) {
  return <Footer {...restProps}>{children}</Footer>
}
