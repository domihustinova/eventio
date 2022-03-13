import { format } from 'date-fns'

import useWindowSize from '../utils/hooks/use-window-size'
import { EVENT_ACTION, EVENTS_VIEW, BREAKPOINTS } from '../utils/consts'
import { EventCardGrid } from '../components/EventCard/EventCardGrid.js'
import { EventCardList } from '../components/EventCard/EventCardList.js'

export function EventsCardContainer({ event, userId, view, onJoin, onLeave }) {
  const {
    id,
    startsAt: date,
    title,
    owner: { firstName, lastName },
    capacity,
    description,
    attendees,
  } = event
  const windowSize = useWindowSize()
  const isMobile = windowSize.width < BREAKPOINTS.TABLET

  const isAttending = attendees.some(attendee => attendee.id === userId)

  if (view === EVENTS_VIEW.GRID) {
    return (
      <EventCardGrid key={id}>
        <EventCardGrid.Content>
          <EventCardGrid.Date>{format(Date.parse(date), 'MMMM d, yyy - h:m a')}</EventCardGrid.Date>
          <EventCardGrid.Title>{title}</EventCardGrid.Title>
          <EventCardGrid.Owner>
            {firstName} {lastName}
          </EventCardGrid.Owner>
          <EventCardGrid.Description>{description}</EventCardGrid.Description>
        </EventCardGrid.Content>
        <EventCardGrid.Footer>
          <EventCardGrid.Attendees>
            {attendees.length} of {capacity}
          </EventCardGrid.Attendees>
          <EventCardGrid.ActionButton
            isAttending={isAttending}
            onClick={() => (isAttending ? onLeave(id) : onJoin(id))}
          >
            {isAttending ? EVENT_ACTION.LEAVE : EVENT_ACTION.JOIN}
          </EventCardGrid.ActionButton>
        </EventCardGrid.Footer>
      </EventCardGrid>
    )
  }
  return (
    <EventCardList key={id}>
      <EventCardList.Title>{title}</EventCardList.Title>
      <EventCardList.Description>{description}</EventCardList.Description>
      {!isMobile && (
        <EventCardList.Owner>
          {firstName} {lastName}
        </EventCardList.Owner>
      )}
      <EventCardList.Date>{format(Date.parse(date), 'MMMM d, yyy - h:m a')}</EventCardList.Date>
      {isMobile ? (
        <EventCardList.Footer>
          <EventCardList.Attendees>
            {attendees.length} of {capacity}
          </EventCardList.Attendees>
          <EventCardGrid.ActionButton
            isAttending={isAttending}
            onClick={() => (isAttending ? onLeave(id) : onJoin(id))}
          >
            {isAttending ? EVENT_ACTION.LEAVE : EVENT_ACTION.JOIN}
          </EventCardGrid.ActionButton>
        </EventCardList.Footer>
      ) : (
        <>
          <EventCardList.Attendees>
            {attendees.length} of {capacity}
          </EventCardList.Attendees>
          <EventCardGrid.ActionButton
            isAttending={isAttending}
            onClick={() => (isAttending ? onLeave(id) : onJoin(id))}
          >
            {isAttending ? EVENT_ACTION.LEAVE : EVENT_ACTION.JOIN}
          </EventCardGrid.ActionButton>
        </>
      )}
    </EventCardList>
  )
}
