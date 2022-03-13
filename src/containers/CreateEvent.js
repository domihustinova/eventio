import React, { useState } from 'react'
import { CreateEvent } from '../components/CreateEvent/CreateEvent'

export function CreateEventContainer() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [capacity, setCapacity] = useState('')

  const handleCreateEvent = event => {
    event.preventDefault()
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
          id="date"
          name="date"
          label="Date"
          value={date}
          type="date"
          autoComplete="off"
          onChange={({ target }) => setDate(target.value)}
        />
        <CreateEvent.Input
          id="time"
          name="time"
          label="Time"
          value={time}
          type="time"
          autoComplete="off"
          onChange={({ target }) => setTime(target.value)}
        />
        <CreateEvent.Input
          id="capacity"
          name="capacity"
          label="Capacity"
          value={capacity}
          type="number"
          min="0"
          max="1000"
          autoComplete="off"
          onChange={({ target }) => setCapacity(target.value)}
        />
        <CreateEvent.Submit type="submit">CREATE NEW EVENT</CreateEvent.Submit>
      </CreateEvent.Frame>
    </CreateEvent>
  )
}
