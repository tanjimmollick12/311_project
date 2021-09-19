import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import axios from 'axios'
import Message from '../components/Message'
export const OrderPage = () => {

    const [Contact, setContact] = useState('')
    const [Del_Charge, setDelCharge] = useState(200)
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    const shippingAdd = useSelector((state) => state.cart.shippingAddress)
    const Product_ID = useSelector((state) => state.cart.cartItems[0].product)
    const ProdQTY = useSelector((state) => state.cart.cartItems[0].qty)
    //const Amount = useSelector((state) => state.cart.cartItems[0].price)
    const division = shippingAdd.division
    const district = shippingAdd.district
    const sub_district = shippingAdd.sub
    const area = shippingAdd.area

    const data = {ProdQTY,Del_Charge,Contact,division,district,sub_district,area}
    const config = {
        headers: {
            Authorization: 'Bearer ' + userInfo.token
        },
    }
    const [message, setMessage] = useState()
 async function orderHandler() {


      await axios.post(`http://127.0.0.1:8000/api/order/${Product_ID}`, data, config)
      .then(resp => {
        setMessage(resp.data.message)
      })
            .catch(error => console.log(error.message))
            
        console.log(data)
        console.log(userInfo.token)
    }
    return (
        <div>
            <Header />
            <Message variant='danger'>{message}</Message>
            <div >
                <div style={{ padding: "5px 5px 20px 580px" }}>
                    <label > Contact </label>
                    <br />
                    <input style={{ padding: "5px 5px", color: "green", margin: "10px" }}

                        type='text'

                        placeholder='01913556633'
                        value={Contact}
                        onChange={(e) => setContact(e.target.value)}
                    />

                </div>

                <div style={{ padding: "5px 5px 20px 580px" }}>
                    <button type="submit" className="addProductButton" onClick={orderHandler}>Place Order</button>
                </div>

            </div>
        </div>
    )
}
