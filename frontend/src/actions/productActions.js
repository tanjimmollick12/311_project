import axios from 'axios'
import { useSelector } from 'react-redux'
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_TABLE_REQUEST,
  PRODUCT_TABLE_SUCCESS,
  PRODUCT_TABLE_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL,
} from '../constants/productConstants'
// import { logout } from './userActions'
import {logout} from './adminActions'
export const listProducts = () => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST })
  
      const { data } = await axios.get(
        'http://127.0.0.1:8000/api/productlist'
      )
  
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  export const listProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST })
  
      const { data } = await axios.get(`http://127.0.0.1:8000/api/product/${id}`)
  
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  
  export const createProduct = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_CREATE_REQUEST,
      })
  
      const {
        userLogin: { adminInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      }
  
      const { data } = await axios.post('http://127.0.0.1:8000/api/addproduct', {}, config)
  
      dispatch({
        type: PRODUCT_CREATE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: PRODUCT_CREATE_FAIL,
        payload: message,
      })
    }
  }
  
  export const updateProduct = (product) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_UPDATE_REQUEST,
      })
  
      const {
        userLogin: { adminInfo },
      } = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${adminInfo.token}`,
        },
      }
  
      const { data } = await axios.put(
        `http://127.0.0.1:8000/api/updateproduct/${product.id}`,
        product,
        config
      )
  
      dispatch({
        type: PRODUCT_UPDATE_SUCCESS,
        payload: data,
      })
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: PRODUCT_UPDATE_FAIL,
        payload: message,
      })
    }
  }
  
  // export const createProductReview = (productId, review) => async (
  //   dispatch,
  //   getState
  // ) => {
  //   try {
  //     dispatch({
  //       type: PRODUCT_CREATE_REVIEW_REQUEST,
  //     })
  
  //     const {
  //       userLogin: { userInfo },
  //     } = getState()
  
  //     const config = {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${userInfo.token}`,
  //       },
  //     }
  
  //     await axios.post(`/api/products/${productId}/reviews`, review, config)
  
  //     dispatch({
  //       type: PRODUCT_CREATE_REVIEW_SUCCESS,
  //     })
  //   } catch (error) {
  //     const message =
  //       error.response && error.response.data.message
  //         ? error.response.data.message
  //         : error.message
  //     if (message === 'Not authorized, token failed') {
  //       dispatch(logout())
  //     }
  //     dispatch({
  //       type: PRODUCT_CREATE_REVIEW_FAIL,
  //       payload: message,
  //     })
  //   }
  // }
  
  // export const listTopProducts = () => async (dispatch) => {
  //   try {
  //     dispatch({ type: PRODUCT_TOP_REQUEST })
  
  //     const { data } = await axios.get(`/api/products/top`)
  
  //     dispatch({
  //       type: PRODUCT_TOP_SUCCESS,
  //       payload: data,
  //     })
  //   } catch (error) {
  //     dispatch({
  //       type: PRODUCT_TOP_FAIL,
  //       payload:
  //         error.response && error.response.data.message
  //           ? error.response.data.message
  //           : error.message,
  //     })
  //   }
  // }
  