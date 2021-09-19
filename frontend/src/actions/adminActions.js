import axios from 'axios'
import { useSelector } from 'react-redux'
import {
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
  ADMIN_REGISTER_FAIL,
  ADMIN_REGISTER_REQUEST,
  ADMIN_REGISTER_SUCCESS,
  ADMIN_DETAILS_RESET,

} from '../constants/adminConstants'
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_LOGIN_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      'http://127.0.0.1:8000/api/login',
      { email, password },
      config
    )

    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('adminInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const logout = () => (dispatch, getState) => {


  document.location.href = '/login'
  const {
    adminLogin: { adminInfo },
  } = getState()
  const config = {
    headers: {
      Authorization: 'Bearer ' + adminInfo.token
    },
  }

  axios.delete('http://127.0.0.1:8000/api/signout', config)
    .then(
    ).catch(err => {
      console.log(err)
    })

  localStorage.removeItem('adminInfo')

  dispatch({ type: ADMIN_LOGOUT })
  dispatch({ type: ADMIN_DETAILS_RESET })

}


export const register = (name, email, password, password_confirmation) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_REGISTER_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    }

    const { data } = await axios.post(
      'http://127.0.0.1:8000/api/register',
      { name, email, password, password_confirmation },
      config
    )

    dispatch({
      type: ADMIN_REGISTER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ADMIN_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
  document.location.href = '/emailsent'
}

