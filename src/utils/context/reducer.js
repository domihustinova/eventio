import { AUTH_REDUCER_ACTION_TYPES } from '../consts'

let user = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser'))
  : null

let token = localStorage.getItem('refreshToken')
  ? JSON.parse(localStorage.getItem('refreshToken'))
  : null

export const initialState = {
  user: null || user,
  token: '',
  refreshToken: '' || token,
  loading: false,
  errorMessage: null,
}

export const AuthReducer = (initialState, action) => {
  const { type, payload, error } = action

  switch (type) {
    case AUTH_REDUCER_ACTION_TYPES.REQUEST_LOGIN:
      return {
        ...initialState,
        loading: true,
        errorMessage: null,
      }
    case AUTH_REDUCER_ACTION_TYPES.REFRESH_TOKEN_SUCCESS:
      return {
        ...initialState,
        token: payload.token,
        loading: false,
        errorMessage: null,
      }
    case AUTH_REDUCER_ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...initialState,
        user: payload.data,
        token: payload.token,
        refreshToken: payload.refreshToken,
        loading: false,
        errorMessage: null,
      }
    case AUTH_REDUCER_ACTION_TYPES.LOGOUT:
      return {
        ...initialState,
        user: null,
        errorMessage: null,
        token: '',
        refreshToken: '',
      }

    case AUTH_REDUCER_ACTION_TYPES.LOGIN_ERROR:
      return {
        ...initialState,
        loading: false,
        errorMessage: error,
      }

    default:
      throw new Error(`Unhandled action type: ${type}`)
  }
}
