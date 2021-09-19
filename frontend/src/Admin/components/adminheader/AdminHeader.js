import React from "react";
import { Link } from 'react-router-dom'
import { LinkContainer } from "react-router-bootstrap";
import "./header.css";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from "../../../actions/adminActions";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
export default function AdminHeader() {

  const dispatch = useDispatch()
  const adminLogin = useSelector((state) => state.adminLogin)
  const { adminInfo } = adminLogin
  
  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="headLeft">

          <LinkContainer to='/admindashboard'>
            <Navbar.Brand>Company Logo</Navbar.Brand>
          </LinkContainer>

        </div>
        <div className="headRight">

          <div >
            <NavDropdown title={adminInfo.name} id='username' style={{ font:"green" }}>
              {/* <LinkContainer to='/profile'>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer> */}
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </div>
          <img
            src="C:\Users\spicy\Desktop\MBS_DogEvolution_blg_031820.jpg" alt="" className="headAvatar" />
        </div>
      </div>
    </div>
  );
}