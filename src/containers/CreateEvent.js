import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuthState, useAuthDispatch, refreshAuth } from '../utils/context'
import { createEvent } from '../utils/helpers'
import { ROUTES, CREATE_EVENT_ACTION } from '../utils/consts'

import { CreateEvent } from '../components/CreateEvent/CreateEvent'

export function CreateEventContainer() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dateTime, setDateTime] = useState('')
  const [capacity, setCapacity] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const { token, refreshToken } = useAuthState()
  const dispatch = useAuthDispatch()
  const navigate = useNavigate()

  const handleCreateEvent = async event => {
    event.preventDefault()
    setIsSubmitting(true)

    const createEventPayload = {
      title,
      description,
      startsAt: new Date(dateTime).toISOString(),
      capacity: Number(capacity),
    }

    try {
      const response = await createEvent(token, createEventPayload)

      if (response.error === 'Validation') {
        setIsSubmitting(false)
        setError(response.error)
        return
      } else if (response.error === 'User.NotAuthenticated') {
        const response = await refreshAuth(dispatch, { refreshToken })
        const data = await createEvent(response.token, createEventPayload)
        if (data.id) {
          setIsSubmitting(false)
          navigate(ROUTES.DASHBOARD)
          return data
        } else if (data.error === 'Validation') {
          setIsSubmitting(false)
          setError(data.error)
          return
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <CreateEvent>
      <CreateEvent.Title>Create new event</CreateEvent.Title>
      <CreateEvent.Subtitle>Enter details below.</CreateEvent.Subtitle>
      <CreateEvent.Frame onSubmit={handleCreateEvent}>
        <CreateEvent.Input
          id="title"
          name="title"
          label="Title"
          value={title}
          type="text"
          autoComplete="off"
          onChange={({ target }) => setTitle(target.value)}
        />
        <CreateEvent.Input
          id="description"
          name="description"
          label="Description"
          value={description}
          type="text"
          autoComplete="off"
          onChange={({ target }) => setDescription(target.value)}
        />
        <CreateEvent.Input
          id="dateTime"
          name="dateTime"
          label="Date & Time"
          min="2022-03-12"
          type="datetime-local"
          autoComplete="off"
          onChange={({ target }) => setDateTime(target.value)}
        />
        <CreateEvent.Input
          id="capacity"
          name="capacity"
          label="Capacity"
          value={capacity}
          type="number"
          min="1"
          autoComplete="off"
          onChange={({ target }) => setCapacity(target.value)}
        />
        {error && <CreateEvent.Error>Oops, something is wrong with the details.</CreateEvent.Error>}
        <CreateEvent.Submit type="submit" disabled={isSubmitting}>
          {isSubmitting ? CREATE_EVENT_ACTION.SUBMITTING : CREATE_EVENT_ACTION.CREATE}
        </CreateEvent.Submit>
      </CreateEvent.Frame>
    </CreateEvent>
  )
}
