import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from './reducers/userReducers'
import {
  adminLoginReducer,
  adminRegisterReducer,
  adminDetailsReducer,
  adminUpdateProfileReducer,
  adminListReducer,
  adminDeleteReducer,
  adminUpdateReducer,
} from './reducers/adminReducer'
import {
     productListReducer,
     productTableReducer,
     productDetailsReducer,
     productDeleteReducer,
     productCreateReducer,
     productUpdateReducer,
    // productReviewCreateReducer,
    // productTopRatedReducer,
  } from './reducers/productReducers'
  import { cartReducer } from './reducers/cartReducers'
  const reducer = combineReducers({
     userLogin: userLoginReducer,
     userRegister: userRegisterReducer,
     userDetails: userDetailsReducer,
     adminLogin: adminLoginReducer,
     adminRegister: adminRegisterReducer,
     adminDetails: adminDetailsReducer,
     productList: productListReducer,
     productTable: productTableReducer,
     productDetails: productDetailsReducer,
     productDelete: productDeleteReducer,
     productCreate: productCreateReducer,
     productUpdate: productUpdateReducer,
    // productReviewCreate: productReviewCreateReducer,
    // productTopRated: productTopRatedReducer,
    cart: cartReducer,

  })
  const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

  const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

  
  const adminInfoFromStorage = localStorage.getItem('adminInfo')
  ? JSON.parse(localStorage.getItem('adminInfo'))
  : null
  const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

  const initialState = {
    cart: {
      cartItems: cartItemsFromStorage,
      shippingAddress: shippingAddressFromStorage,
    },
    userLogin: {userInfo: userInfoFromStorage },
    adminLogin:{adminInfo: adminInfoFromStorage},
  }
  

  const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store