import React from "react";
import { Link } from 'react-router-dom'
import { LinkContainer } from "react-router-bootstrap";
import {Navbar} from 'react-bootstrap'
import "./header.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function AdminHeader() {
  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="headLeft">
         
          <LinkContainer to='/admindashboard'>
            <Navbar.Brand>Company Logo</Navbar.Brand>
          </LinkContainer>

        </div>
        <div className="headRight">
       
          <div className="headerIconContainer">
          <LinkContainer to='/resetpw'>
          <Settings />
          </LinkContainer>
            
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="headAvatar" />
        </div>
      </div>
    </div>
  );
}