import axios from 'axios'
import React from 'react'
import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminHeader from '../../components/adminheader/AdminHeader'
function Delivery_Status({ match, history }) {
    const orderID = match.params.id
    const [Del_Status, setDel] = useState('')

    const handleSelect = (e) => {
        setDel(e.target.value)
    }

    const adminLogin = useSelector((state) => state.adminLogin)
    const { adminInfo } = adminLogin

    const config = {
        headers: {
            Authorization: 'Bearer ' + adminInfo.token
        }
    }
 async   function submitHandler() {
    
        await axios.post(`http://127.0.0.1:8000/api/deliveried/${orderID}`, Del_Status, config)
            .then(response => console.log(response.data.message))
            .catch(error => console.log(error.message))
            document.location.href = '/orders'
            console.log(Del_Status)
    }
    return (
        <div>
            <AdminHeader />
            <div className="addProductItem">
                <label>Delivered</label>
                <select
                    
                    defaultValue={Del_Status}
                    onChange={handleSelect}
                    name="active" id="active">
                    <option value={true} >Yes</option>
                    <option value={false}>No</option>
                   
                </select>
                <br />
                <Button onClick={submitHandler}>Submit</Button>
            </div>
        </div>
    )
}

export default Delivery_Status
