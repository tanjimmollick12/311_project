import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";
import Header from "../adminheader/AdminHeader";
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';


const columns = [

  {
    field: 'order_id',
    headerName: 'Order ID',
    width: 150
  },


  {
    field: 'product_id',
    headerName: 'Product ID',
    width: 150,
    editable: true,
  },
  {
    field: 'product_name',
    headerName: 'Product Name',
    width: 180,
    editable: true,
  },

  {
    field: 'delivered_at',
    headerName: 'Delivered Time',
    width: 200,
    editable: true,
  },

];
const rows = [
  {
    id: 1,
    order_id:1,
    product_id: 5,
    product_name: 'T-shirt',
    delivered_at: '08/24/2021 01:44:25 PM',

  }
];

export default function User() {
  return (
    <div className="user">
   
      <div className="userTitleContainer">
        <h1 className="userUpdateTitle">User Details</h1>

      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Ahalya Mitra</span>
              <span className="userShowUserTitle">Female</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">ahalya99</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">ahalya999@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Dhaka | Bangladesh</span>
            </div>
            <div style={{ float:'right' }}>
              <Button>Edit</Button>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Purchase History</span>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={7}
              checkboxSelection
              disableSelectionOnClick
            />
          </div>
        </div>
      </div>
    </div>
  );
}
