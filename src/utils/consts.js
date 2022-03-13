export const ROOT_URL = 'https://testproject-api-v2.strv.com'

export const LOGIN_SUBTITLE = {
  DEFAULT: 'Enter your details below.',
  ERROR: 'Oops! That email and pasword combination is not valid.',
}

export const AUTH_REDUCER_ACTION_TYPES = {
  REQUEST_LOGIN: 'REQUEST_LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
  LOGIN_ERROR: 'LOGIN_ERROR',
  REQUEST_REFRESH_TOKEN: 'REQUEST_REFRESH_TOKEN',
  REFRESH_TOKEN_SUCCESS: 'REFRESH_TOKEN_SUCCESS',
}

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  CREATE: '/create',
  NOT_FOUND: '*',
}

export const HEADER_THEME = {
  DARK: 'DARK',
  LIGHT: 'LIGHT',
}

export const EVENTS_VIEW = {
  GRID: 'GRID',
  LIST: 'LIST',
}

export const EVENTS_FILTERS = {
  ALL: 'ALL EVENTS',
  FUTURE: 'FUTURE EVENTS',
  PAST: 'PAST EVENTS',
}

export const EVENT_ACTION = {
  JOIN: 'JOIN',
  LEAVE: 'LEAVE',
  EDIT: 'EDIT',
}
