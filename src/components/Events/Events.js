import React from 'react'

import {
  Add,
  Container,
  Filter,
  FilterGroup,
  Frame,
  Footer,
  Menu,
  Toggle,
  ToggleGroup,
} from './styles/Events'

import { ReactComponent as Plus } from '../../images/plus.svg'

export function Events({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Events.Menu = function EventsMenu({ children, ...restProps }) {
  return <Menu {...restProps}>{children}</Menu>
}

Events.Filter = function EventsFilter({ children, ...restProps }) {
  return <Filter {...restProps}>{children}</Filter>
}

Events.FilterGroup = function EventsFilterGroup({ children, ...restProps }) {
  return <FilterGroup {...restProps}>{children}</FilterGroup>
}

Events.Toggle = function EventsToggle({ children, ...restProps }) {
  return <Toggle {...restProps}>{children}</Toggle>
}

Events.ToggleGroup = function EventsToggleGroup({ children, ...restProps }) {
  return <ToggleGroup {...restProps}>{children}</ToggleGroup>
}

Events.Frame = function EventsFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

Events.Add = function EventsAdd({ children, ...restProps }) {
  return (
    <Footer>
      <Add {...restProps}>
        <Plus />
        {children}
      </Add>
    </Footer>
  )
}
