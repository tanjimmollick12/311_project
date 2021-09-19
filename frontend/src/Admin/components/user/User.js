import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Table, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import "./user.css";
import Header from "../adminheader/AdminHeader";
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function User() {

  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  if (!userInfo) {
    document.location = '/login'
  }
  console.log(userInfo.token)
  const config = {
    headers: {
      Authorization: 'Bearer ' + userInfo.token
    },
  }

  const [customer, setCustomer] = useState([])

  useEffect(() => {

    axios.get('http://127.0.0.1:8000/api/profile', config)
      .then(
        res => {

          setCustomer(res.data)
        }

      ).catch(err => {
        console.log(err)
      })

  }, [])

  const [purchases, setPurchase] = useState([])
  useEffect(() => {

    axios.get('http://127.0.0.1:8000/api/purchased', config)
      .then(resp => {
        setPurchase(resp.data)
      })
  }, [])

  return (
    <div className="user">

      <div className="userTitleContainer">
        <h1 className="userUpdateTitle">User Details</h1>

      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={'http://127.0.0.1:8000' + customer.map(c => c.img_path)}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{customer.map(c => c.f_name) + ' ' + customer.map(c => c.l_name)}</span>
              <span className="userShowUserTitle">{customer.map(c => c.gender)}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">

            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{customer.map(c => c.DOB)}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{customer.map(c => c.contact)}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{customer.map(c => c.email)}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{customer.map(c => c.division) + ' | ' + customer.map(c => c.district)}</span>
            </div>
            <div style={{ float: 'right' }}>
              <LinkContainer to="/edit">
                <Button>Edit</Button>
              </LinkContainer>

            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Purchase History</span>
          <div style={{ height: 400, width: '100%' }}>
            <Table

              style={{ padding: "10px 10px 5px 5px", margin: "10px 10px 10px 10px" }}>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Product ID</th>
                  <th>Products Quantity</th>
                  <th>Amount</th>
                  <th>Payment Status</th>
                  <th>Delivery Status</th>
                  <th>Order Time</th>
                </tr>
              </thead>
              <tbody>
                {purchases.map((purchase) => (
                  <tr key={purchase.id}>
                     <td>{purchase.id}</td>
                    <td>{purchase.Product_ID}</td>
                    <td>{purchase.ProdQTY}</td>
                    <td>{purchase.Amount}</td>
                    <td>{purchase.payment_status}</td>
                    <td>{purchase.Del_Status}</td>
                    <td>{purchase.created_at}</td>
        
                    <td>
        
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );

}

