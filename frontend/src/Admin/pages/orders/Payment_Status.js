import axios from 'axios'
import React from 'react'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import {  useSelector } from 'react-redux'
import AdminHeader from '../../components/adminheader/AdminHeader'
function Payment_Status({ match, history }) {
    const orderID = match.params.id
    const [payment_status, setPay] = useState('')

    const handleSelect = (e) => {
        setPay(e.target.value)
    }

    const adminLogin = useSelector((state) => state.adminLogin)
    const { adminInfo } = adminLogin

    const config = {
        headers: {
            Authorization: 'Bearer ' + adminInfo.token
        }
    }
 async   function submitHandler() {
    
        await axios.post(`http://127.0.0.1:8000/api/paid/${orderID}`, payment_status, config)
            .then(response => console.log(response.data.message))
            .catch(error => console.log(error.message))
            document.location.href = '/orders'
            console.log(payment_status)
    }
    return (
        <div>
            <AdminHeader />
            <div className="addProductItem">
                <label>Paid</label>
                <select
                    
                    onChange={handleSelect}
                    name="active" id="active">
                    <option value={1} >Yes</option>
                    <option value={0}>No</option>
                </select>
                <br />
                <Button onClick={submitHandler}>Submit</Button>
            </div>
        </div>
    )
}

export default Payment_Status
