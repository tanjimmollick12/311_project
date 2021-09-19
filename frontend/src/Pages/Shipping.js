import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'

import { saveShippingAddress } from '../actions/cartActions'
export const Shipping = ({history}) => {
    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart
    
    const [division, setDivision] = useState(shippingAddress.division)
    const [district, setDistrict] = useState(shippingAddress.district)
    const [sub, setSub] = useState(shippingAddress.sub)
    const [area, setArea] = useState(shippingAddress.area)

    const dispatch = useDispatch()
    function submitHandler(e){
        e.preventDefault()
        dispatch(saveShippingAddress({ division, district, sub, area }))
        history.push('/order')
    }
    return (
        <div>
            <Header />

            <div style={{ padding: "5px 5px 20px 580px", backgroundColor: "#f5f5f5" }}>

                <label >Shipping Address </label>
                <br />
                <input style={{ padding: "5px 5px", color: "green", margin: "10px", width: "300px" }}

                    type='text'

                    placeholder='Division'
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                />
                <br />
                <input style={{ padding: "5px 5px", color: "green", margin: "10px", width: "300px" }}

                    type='text'

                    placeholder='District'
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                />
                <br />
                <input style={{ padding: "5px 5px", color: "green", margin: "10px", width: "300px" }}

                    type='text'

                    placeholder='Sub District'
                    value={sub}
                    onChange={(e) => setSub(e.target.value)}
                />
                <br />
                <input style={{ padding: "5px 5px", color: "green", margin: "10px", width: "300px" }}

                    type='text'

                    placeholder='Area'
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                />
                <div>
                <button type="submit" className="addProductButton" onClick={submitHandler}>Continue</button>

                </div>
            
            </div>
        </div>
    )
}
