import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { logout } from '../../actions/userActions'
import Header from '../../components/Header'
import { LinkContainer } from 'react-router-bootstrap'
function UserEdit() {
    const dispatch = useDispatch()
    const [f_name, setf_name] = useState('')
    const [l_name, setl_name] = useState('')
    const [gender, setGender] = useState('')
    const [DOB, setDob] = useState('')
    const [contact, setContact] = useState('')
    const [division, setDivision] = useState('')
    const [district, setDistrict] = useState('')
    const [sub, setSub] = useState('')
    const [area, setArea] = useState('')
    DOB.toString()
    const data = {f_name,l_name,gender,DOB,contact,division,district,sub,area}

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    if(!userInfo){
        document.location.href = '/login'
    }

    const config = {
        headers: {
            Authorization: 'Bearer ' + userInfo.token
        },
    }


   async function  updateHandler () {

       await axios.put('http://127.0.0.1:8000/api/update', data, config)
            .then(response => console.log(response))
            .catch(error => console.log(error.message))
            document.location.href = '/profile'
            console.log(data)
    }
    // const logoutHandler = () => {
    //     dispatch(logout())
    // }
    const deleteHandler = () => {

        axios.delete('http://127.0.0.1:8000/api/delete', config)
            .then(response => console.log(response))
            .catch(error => console.log(error.message))
        
        
    }



    return (
        <div>
            <Header />
            <div style={{ padding: "5px 5px 20px 580px", backgroundColor: "#f5f5f5" }}>
                <h1>User Update </h1>

                <div className='form-inputs'>
                    <br />

                    <label > Name </label>
                    <div>
                        <input style={{ padding: "5px 5px", color: "green", margin: "10px" }}
                            type='text'
                            placeholder='First Name'
                            value={f_name}
                            onChange={(e) => setf_name(e.target.value)}
                        />

                        <input style={{ padding: "5px 5px", color: "green", margin: "10px" }}
                            type='text'

                            placeholder='Last Name'
                            value={l_name}
                            onChange={(e) => setl_name(e.target.value)}
                        />
                    </div>
                </div>

                <div className='form-inputs' >

                    <label  > Gender </label>
                    <div  >


                        <input type="radio" value="Male" name="gender"
                            onChange={(e) => setGender(e.target.value)}
                        /> Male

                        <input type="radio" value="Female" name="gender"
                            onChange={(e) => setGender(e.target.value)}
                        /> Female

                    </div>
                </div>
                <div className='form-inputs' >

                    <label> Date Of Birth </label>
                    <input
                        style={{ padding: "5px 5px", color: "green", margin: "10px" }}
                        type='date'
                        format="yyyy-mm-dd"
                        value={DOB}
                        onChange={(e) => setDob(e.target.value)}

                    />
                </div>
                <div>
                    <label > Contact </label>
                    <br />
                    <input style={{ padding: "5px 5px", color: "green", margin: "10px", width: "300px" }}

                        type='text'

                        placeholder='01913556633'
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />
                    <br />
                </div>
                <div>
                    <label > Address </label>
                    <br />
                    <input style={{ padding: "5px 5px", color: "green", margin: "10px", width: "300px" }}

                        type='text'

                        placeholder='Division'
                        value={division}
                        onChange={(e) => setDivision(e.target.value)}
                    />
                    <br />
                    <input style={{ padding: "5px 5px", color: "green", margin: "10px", width: "300px" }}

                        type='text'

                        placeholder='District'
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                    />
                    <br />
                    <input style={{ padding: "5px 5px", color: "green", margin: "10px", width: "300px" }}

                        type='text'

                        placeholder='Sub District'
                        value={sub}
                        onChange={(e) => setSub(e.target.value)}
                    />
                    <br />
                    <input style={{ padding: "5px 5px", color: "green", margin: "10px", width: "300px" }}

                        type='text'

                        placeholder='Area'
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                    />
                </div>


                <br />
                <Button type='submit' variant='primary' onClick={updateHandler}>
                    Update
                </Button>
                <br />
                <br />
                <LinkContainer to="/">
                <Button type='submit' variant='primary' onClick={deleteHandler} style={{ color: "white", backgroundColor: "red" }}>
                    Delete Account
                </Button>
                </LinkContainer>
            </div>
        </div>
    )
}

export default UserEdit
