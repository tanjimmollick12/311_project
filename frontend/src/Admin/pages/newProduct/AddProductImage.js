import React, { useState } from 'react'
import axios from 'axios';
import AdminHeader from '../../components/adminheader/AdminHeader';
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../../components/Message';
function AddProductImage({ match, history }) {

    const productId = match.params.id
   
    const [file, setFile] = useState('')
    const formData = new FormData();
    formData.append("file", file);
    const adminLogin = useSelector((state) => state.adminLogin)
    const { adminInfo } = adminLogin
  
    const config = {
      headers: {
        Authorization: 'Bearer ' + adminInfo.token
      }
    }
    const [message, setMessage] = useState()
  async  function uploadHandler() {
        await axios.post(`http://127.0.0.1:8000/api/addprodimg/${productId}`, formData, config)
        .then(resp => {
            setMessage(resp.data.message)
          })
            .catch(error => console.log(error.message))
        console.log(file.name)
    }
    return (
        <div>
            <AdminHeader />
            <Message variant='danger'>{message}</Message>
            <div style={{ padding: "5px 5px 20px 580px", backgroundColor: "#f5f5f5" }}>

                <h1>Add Product Image</h1>
                <input type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                >
                </input>

                <button type="submit" className="addProductButton" onClick={uploadHandler} >Add Image</button>
            </div>


        </div>
    )
}

export default AddProductImage
