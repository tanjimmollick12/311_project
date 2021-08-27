import React from 'react'
import AdminHeader from '../../components/adminheader/AdminHeader'
import { Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function OrderType() {
    return (
        <div>
            <AdminHeader />
            <div className='container'>
                <Row className='py-3'>
                    <Col>
                        Orders Via Delivery Charge    
                        <Link to={'/ordersdel'}>
                            <Button className="order-button">Here</Button>
                        </Link>
                    </Col>
                </Row>
                <Row className='py-3'>
                    <Col>
                        Orders Via Payment
                        <Link to={'/orderspay'}>
                            <Button className="order-button">Here</Button>
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default OrderType
