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
  SIGNUP: '/signup',
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

export const CREATE_EVENT_ACTION = {
  SUBMITTING: 'SUBMITTING...',
  CREATE: 'CREATE NEW EVENT',
}

export const LAYOUT_TEXTS = {
  TEXT: '"Great, kid. Don\'t get cocky."',
  AUTHOR: 'Han Solo',
}

export const HEADER_TEXTS = {
  SIGN_UP_TEXT: "Don't have account?",
  SIGN_UP_CTA: 'SIGN UP',
  LOGIN_TEXT: 'Already have an account?',
  LOGIN_CTA: 'SIGN IN',
}

export const NOT_FOUND_TEXTS = {
  TITLE: '404 Error - page not found',
  SUBTITLE:
    'Seems like Darth Vader just hits our website and drops it down. Please press the refresh button and everything should be fine again.',
  ACTION: 'REFRESH',
}

export const BREAKPOINTS = {
  MOBILE_SMALL: '375',
  TABLET: '768',
  LAPTOP: '1024',
  LAPTOP_LARGE: '1440',
}

export const DEVICES_MIN = {
  MOBILE_SMALL: `(min-width: ${BREAKPOINTS.MOBILE_SMALL}px)`,
  TABLET: `(min-width: ${BREAKPOINTS.TABLET}px)`,
  LAPTOP: `(min-width: ${BREAKPOINTS.LAPTOP}px)`,
  LAPTOP_LARGE: `(min-width: ${BREAKPOINTS.LAPTOP_LARGE}px)`,
}

export const DEVICES_MAX = {
  MOBILE_SMALL: `(max-width: ${BREAKPOINTS.MOBILE_SMALL}px)`,
  TABLET: `(max-width: ${BREAKPOINTS.TABLET}px)`,
  LAPTOP: `(max-width: ${BREAKPOINTS.LAPTOP}px)`,
  LAPTOP_LARGE: `(max-width: ${BREAKPOINTS.LAPTOP_LARGE}px)`,
}
