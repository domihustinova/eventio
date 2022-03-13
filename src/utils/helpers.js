import { ROOT_URL } from './consts'

export const getInitials = (firstName, lastName) => firstName[0] + lastName[0]

export const unattendEvent = async (id, token) => {
  try {
    const response = await fetch(`${ROOT_URL}/events/${id}/attendees/me`, {
      mode: 'cors',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        APIKey: process.env.REACT_APP_API_KEY,
        Authorization: token,
      },
    })
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export const attendEvent = async (id, token) => {
  try {
    const response = await fetch(`${ROOT_URL}/events/${id}/attendees/me`, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        APIKey: process.env.REACT_APP_API_KEY,
        Authorization: token,
      },
    })
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export const getAllEvents = async () => {
  const response = await fetch(`${ROOT_URL}/events`, {
    mode: 'cors',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      APIKey: process.env.REACT_APP_API_KEY,
    },
  })
  return response.json()
}
