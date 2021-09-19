import React, { useEffect } from 'react'
import axios from 'axios';
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
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

  const [products, setProduct] = useState([])
  useEffect(() => {

    axios.get('http://127.0.0.1:8000/api/products', config)
      .then(resp => {
        setProduct(resp.data)
      })
  }, [])

  const [message, setMessage] = useState()
  const deleteHandler = (id) => {

    axios.delete(`http://127.0.0.1:8000/api/deleteproduct/${id}`, config)
    .then(resp => {
      setMessage(resp.data.message)
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
      <Message variant='danger'>{message}</Message>
      <Row className='align-items-center'>
        <Col>
          <h1>Products</h1>

        </Col>
      </Row>
      <Row>

        <Col className='text-left'>



          <Button className='my-3'>
            <i className='fas fa-download' onClick={downloadHandler}></i> Download Products
          </Button>


        </Col>
        <Col className='text-right'>
          <LinkContainer to='/newproduct'>

            <Button className='my-3'>
              <i className='fas fa-plus'></i> Create Product
            </Button>

          </LinkContainer>

        </Col>
      </Row>

      <>
        <Table

          style={{ padding: "10px 10px 5px 5px", margin: "10px 10px 10px 10px" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Description</th>
              <th>In Stock</th>
              <th>Offer</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price} TK</td>
                <td>{product.Category}</td>
                <td>{product.Description}</td>
                <td>{product.In_Stock}</td>
                <td>{product.Offer}</td>
                <td>
                  <LinkContainer to={`/addimage/${product.id}`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-plus'></i>
                    </Button>
                  </LinkContainer>
                  <LinkContainer to={`/updateproduct/${product.id}`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(product.id)}
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
