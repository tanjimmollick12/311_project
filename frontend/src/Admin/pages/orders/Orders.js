import React, { useEffect } from 'react'
import axios from 'axios';
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../../components/Message'
import Loader from '../../../components/Loader'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import AdminHeader from '../../components/adminheader/AdminHeader';
import { useState } from 'react';


const ProductTable = () => {

  const adminLogin = useSelector((state) => state.adminLogin)
  const { adminInfo } = adminLogin

  const config = {
    headers: {
      Authorization: 'Bearer ' + adminInfo.token
    },
  }

  const [orders, setOrder] = useState([])
  useEffect(() => {

    axios.get('http://127.0.0.1:8000/api/orders', config)
      .then(resp => {
        setOrder(resp.data)
      })
  }, [])


  const deleteHandler = (id) => {

    axios.delete(`http://127.0.0.1:8000/api/deleteproduct/${id}`, config)
      .then(resp => {
        console.log(resp)
      })

  }
  const downloadHandler = () => {

    axios.get(`http://127.0.0.1:8000/api/productsdownload`, config)
      .then(resp => {
        console.log(resp)
      })

  }

  return (
    <>
      <AdminHeader />
      <Row className='align-items-center'>
        <Col>
          <h1>Orders</h1>

        </Col>
      </Row>
      <Row>

        <Col className='text-left'>



          <Button className='my-3'>
            <i className='fas fa-download' onClick={downloadHandler}></i> Download Orders
          </Button>


        </Col>

      </Row>

      <>
        <Table

          style={{ padding: "10px 10px 5px 5px", margin: "10px 10px 10px 10px" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>CID</th>
              <th>PID</th>
              <th>Num OF Products</th>
              <th>Amount</th>
              <th>Payment Status</th>
              <th>Delivery Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.CID}</td>
                <td>{order.Product_ID}</td>
                <td>{order.ProdQTY}</td>
                <td>{order.Amount}</td>
                <td>{order.payment_status}</td>
                <td>{order.Del_Status}</td>
                <td>
                  <LinkContainer to={`/delivered/${order.id}`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
                  <LinkContainer to={`/paid/${order.id}`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(order.id)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>

    </>
  )
}

export default ProductTable
