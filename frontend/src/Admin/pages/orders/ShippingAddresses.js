import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table, Row, Col } from 'react-bootstrap'
import {  useSelector } from 'react-redux'

import AdminHeader from '../../components/adminheader/AdminHeader';

function ShippingAddresses() {
    const adminLogin = useSelector((state) => state.adminLogin)
    const { adminInfo } = adminLogin

    const config = {
        headers: {
            Authorization: 'Bearer ' + adminInfo.token
        },
    }

    const [addresses, setAddresses] = useState([])

    useEffect(() => {

        axios.get('http://127.0.0.1:8000/api/shippingaddresses', config)
            .then(resp => {
                setAddresses(resp.data)
            })
    }, [])


    return (
        <div>
            <AdminHeader />

            <Row className='align-items-center'>
                <Col>
                    <h1>Shipping Address</h1>

                </Col>
            </Row>

            <>
                <Table

                    style={{ padding: "10px 10px 5px 5px", margin: "20px 20px 20px 20px" }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Order ID</th>
                            <th>Division</th>
                            <th>District</th>
                            <th>Sub District</th>
                            <th>Area</th>
                      
                        </tr>
                    </thead>
                    <tbody>
                        {addresses.map((address) => (
                            <tr key={address.id}>
                                <td>{address.id}</td>
                                <td>{address.OrderID}</td>
                                <td>{address.division}</td>
                                <td>{address.district}</td>
                                <td>{address.sub_district}</td>
                                <td>{address.area}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </>
        </div>
    )
}

export default ShippingAddresses
