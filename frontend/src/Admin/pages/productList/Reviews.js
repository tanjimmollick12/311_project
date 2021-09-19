import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table, Row, Col } from 'react-bootstrap'
import {  useSelector } from 'react-redux'

import AdminHeader from '../../components/adminheader/AdminHeader';

function ReviewTable() {
    const adminLogin = useSelector((state) => state.adminLogin)
    const { adminInfo } = adminLogin

    const config = {
        headers: {
            Authorization: 'Bearer ' + adminInfo.token
        },
    }

    const [reviews, setReviews] = useState([])

    useEffect(() => {

        axios.get('http://127.0.0.1:8000/api/reviews', config)
            .then(resp => {
                setReviews(resp.data)
            })
    }, [])


    return (
        <div>
            <AdminHeader />

            <Row className='align-items-center'>
                <Col>
                    <h1>Reviews</h1>

                </Col>
            </Row>

            <>
                <Table

                    style={{ padding: "10px 10px 5px 5px", margin: "20px 20px 20px 20px" }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product ID</th>
                            <th>Customer ID</th>
                            <th>Order ID</th>
                            <th>Rating</th>
                            <th>Comment</th>
                      
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map((reviews) => (
                            <tr key={reviews.id}>
                                <td>{reviews.id}</td>
                                <td>{reviews.ProductID}</td>
                                <td>{reviews.CID}</td>
                                <td>{reviews.OrderID}</td>
                                <td>{reviews.rating}</td>
                                <td>{reviews.comment}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </>
        </div>
    )
}

export default ReviewTable
