
import React from 'react'
import {Button} from 'react-bootstrap'
import AdminHeader from '../../components/adminheader/AdminHeader'
function Delivery_Status() {
    return (
        <div>
            <AdminHeader/>
            <div className="addProductItem">
                <label>Delivered</label>
                <select name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <br/>
                <Button>Submit</Button>
            </div>
        </div>
    )
}

export default Delivery_Status
