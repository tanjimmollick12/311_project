import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import SearchBox from './SearchBox'
import { Route } from 'react-router'
import { logout } from '../actions/userActions'
import './header.css'
function Header() {

    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>

            <Navbar bg="dark" variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Company Name</Navbar.Brand>
                    </LinkContainer>
                    <Route render={({ history }) => <SearchBox history={history} />} />
                    <NavDropdown title="Category" id="collasible-nav-dropdown">
                        <LinkContainer to='/man'>
                            <NavDropdown.Item>Man</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/woman'>
                            <NavDropdown.Item>Woman</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/child'>
                            <NavDropdown.Item>Child</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                    <NavDropdown title="Offers" id="collasible-nav-dropdown">
                        <LinkContainer to='/offer'>
                            <NavDropdown.Item>Offer Name</NavDropdown.Item>
                        </LinkContainer>

                    </NavDropdown>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to='/cart'>
                                <Nav.Link>
                                    <i className='fas fa-shopping-cart'></i> Cart
                                </Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                <NavDropdown title={userInfo.f_name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <LinkContainer to='/login'>
                                    <Nav.Link>
                                        <i className='fas fa-user'></i> Sign In
                                    </Nav.Link>
                                </LinkContainer>
                            )}
                        </Nav>
                    </Navbar.Collapse>

                </Container>

            </Navbar>

        </header>

    )
}

export default Header
