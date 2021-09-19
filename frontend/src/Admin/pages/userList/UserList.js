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


const CustomerTable = () => {


  const adminLogin = useSelector((state) => state.adminLogin)
  const { adminInfo } = adminLogin

  const config = {
    headers: {
      Authorization: 'Bearer ' + adminInfo.token
    },
  }

  const [customers, setCus] = useState([])
  useEffect(() => {

    axios.get('http://127.0.0.1:8000/api/customers', config)
      .then(resp => {
        setCus(resp.data)
      })
  }, [])


  const deleteHandler = (id) => {

    axios.delete(`http://127.0.0.1:8000/api/deletecust/${id}`, config)
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
          <h1>Customers</h1>

        </Col>
      </Row>
      <Row>

        <Col className='text-left'>



          <Button className='my-3'>
            <i className='fas fa-download' onClick={downloadHandler}></i> Download Customers
          </Button>


        </Col>

      </Row>

      <>
        <Table

          style={{ padding: "10px 10px 5px 5px", margin: "10px 10px 10px 10px" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Date Of Birth</th>
              <th>Email</th>
              <th>Contact</th>
         
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.f_name}</td>
                <td>{customer.l_name}</td>
                <td>{customer.gender}</td>
                <td>{customer.DOB}</td>
                <td>{customer.email}</td>
                <td>{customer.contact}</td>
          
                <td>

                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(customer.id)}
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

export default CustomerTable
