import { ROOT_URL, AUTH_REDUCER_ACTION_TYPES } from '../consts'

export async function loginUser(dispatch, loginPayload) {
  const requestOptions = {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      APIKey: process.env.REACT_APP_API_KEY,
    },
    body: JSON.stringify(loginPayload),
  }

  try {
    dispatch({ type: AUTH_REDUCER_ACTION_TYPES.REQUEST_LOGIN })
    const response = await fetch(`${ROOT_URL}/auth/native`, requestOptions)
    const token = response.headers.get('Authorization')
    const refreshToken = response.headers.get('Refresh-Token')
    const data = await response.json()

    if (data.id) {
      dispatch({
        type: AUTH_REDUCER_ACTION_TYPES.LOGIN_SUCCESS,
        payload: { data, token, refreshToken },
      })
      localStorage.setItem('currentUser', JSON.stringify(data))
      localStorage.setItem('refreshToken', JSON.stringify(refreshToken))
      return data
    }

    dispatch({ type: AUTH_REDUCER_ACTION_TYPES.LOGIN_ERROR, error: data.error })
    return
  } catch (error) {
    dispatch({ type: AUTH_REDUCER_ACTION_TYPES.LOGIN_ERROR, error: error })
  }
}

export async function logout(dispatch) {
  dispatch({ type: AUTH_REDUCER_ACTION_TYPES.LOGOUT })
  localStorage.removeItem('currentUser')
  localStorage.removeItem('id')
}

export async function refreshAuth(dispatch, refreshToken) {
  const requestOptions = {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      APIKey: process.env.REACT_APP_API_KEY,
    },
    body: JSON.stringify(refreshToken),
  }

  try {
    const response = await fetch(`${ROOT_URL}/auth/native`, requestOptions)
    const token = response.headers.get('Authorization')
    const data = await response.json()

    if (data.id) {
      dispatch({
        type: AUTH_REDUCER_ACTION_TYPES.REFRESH_TOKEN_SUCCESS,
        payload: { data, token },
      })
      return { data, token }
    }
    return
  } catch (error) {
    console.log(error)
  }
}
