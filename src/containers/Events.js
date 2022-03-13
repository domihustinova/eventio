import React, { useState, useEffect } from 'react'
import { useAuthState, useAuthDispatch, refreshAuth } from '../utils/context'

import { ROUTES, EVENTS_VIEW, EVENTS_FILTERS } from '../utils/consts'
import { getAllEvents, attendEvent, unattendEvent } from '../utils/helpers'
import { Events } from '../components/Events/Events'
import { EventsCardContainer } from './EventsCard'
import { ReactComponent as Grid } from '../images/grid.svg'
import { ReactComponent as List } from '../images/list.svg'

export function EventsContainer() {
  const [isLoading, setIsLoading] = useState(true)
  const [events, setEvents] = useState(null)
  const [eventsFilter, setEventsFilter] = useState(EVENTS_FILTERS.ALL)
  const [view, setView] = useState(EVENTS_VIEW.GRID)
  const { user, token, refreshToken } = useAuthState()
  const dispatch = useAuthDispatch()

  useEffect(async () => {
    getEvents()
  }, [eventsFilter])

  const getEvents = async () => {
    const events = await getAllEvents()

    const date = new Date()
    if (eventsFilter === EVENTS_FILTERS.PAST) {
      setEvents(events.filter(event => Date.parse(event.startsAt) < date))
    } else if (eventsFilter === EVENTS_FILTERS.FUTURE) {
      setEvents(events.filter(event => Date.parse(event.startsAt) > date))
    } else {
      setEvents(events)
    }
    setIsLoading(false)
  }

  const handleLeaveEventButtonClick = async id => {
    try {
      const response = await unattendEvent(id, token)

      if (response.error === 'User.NotAuthenticated') {
        const response = await refreshAuth(dispatch, { refreshToken })
        await unattendEvent(id, response.token)
      }
      const events = await getAllEvents()
      setEvents(events)
    } catch (error) {
      console.log(error)
    }
  }

  const handleJoinEventButtonClick = async id => {
    try {
      const response = await attendEvent(id, token)
      if (response.error === 'User.NotAuthenticated') {
        const response = await refreshAuth(dispatch, { refreshToken })
        await unattendEvent(id, response.token)
      }
      const events = await getAllEvents()
      setEvents(events)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Events>
        <Events.Menu>
          <Events.FilterGroup>
            {Object.values(EVENTS_FILTERS).map(filter => (
              <Events.Filter
                key={filter}
                active={eventsFilter === filter}
                onClick={() => setEventsFilter(filter)}
              >
                {filter}
              </Events.Filter>
            ))}
          </Events.FilterGroup>
          <Events.ToggleGroup>
            <Events.Toggle
              active={view === EVENTS_VIEW.GRID}
              onClick={() => setView(EVENTS_VIEW.GRID)}
            >
              <Grid />
            </Events.Toggle>
            <Events.Toggle
              active={view === EVENTS_VIEW.LIST}
              onClick={() => setView(EVENTS_VIEW.LIST)}
            >
              <List />
            </Events.Toggle>
          </Events.ToggleGroup>
        </Events.Menu>
        {!isLoading && (
          <Events.Frame view={view}>
            {events.map(event => (
              <EventsCardContainer
                key={event.id}
                event={event}
                userId={user.id}
                view={view}
                onJoin={handleJoinEventButtonClick}
                onLeave={handleLeaveEventButtonClick}
                leave
              />
            ))}
          </Events.Frame>
        )}
      </Events>
      <Events.Add to={ROUTES.CREATE} />
    </>
  )
}
