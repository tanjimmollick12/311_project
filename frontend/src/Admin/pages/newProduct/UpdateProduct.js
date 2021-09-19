import React from 'react'
import "./newProduct.css";
import  { useState, useEffect } from 'react'
import AdminHeader from "../../components/adminheader/AdminHeader";
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../../components/Message';
function UpdateProduct({ match, history }) {
    const [name, setName] = useState('')
    const [Category, setCategory] = useState('')
    const [Sub_Category, setSub] = useState('')
    const [price, setPrice] = useState('')
    const [Description, setDes] = useState('')
    const [In_Stock, setIn] = useState('')
    const [Offer, setOffer] = useState('')
    const handleSelect = (e) => {
      setCategory(e.target.value)
    }

    const productId = match.params.id

    const data = {name,Category,Sub_Category,price,In_Stock,Description,Offer}
    const adminLogin = useSelector((state) => state.adminLogin)
    const { adminInfo } = adminLogin
  
    const config = {
      headers: {
        Authorization: 'Bearer ' + adminInfo.token
      }
    }
  
    const [message, setMessage] = useState()
    async  function updateHandler() {
     await axios.put(`http://127.0.0.1:8000/api/updateproduct/${productId}`, data, config)
            .then(resp => {
                setMessage(resp.data.message)
              })
            .catch(error => console.log(error.message))
       
    }
    return (
        <div>
            <AdminHeader/>
            <Message variant='danger'>{message}</Message>
      <div style={{ padding: "5px 5px 20px 580px", backgroundColor: "#f5f5f5" }}>
        <div className="newProduct">
          <h1 className="addProductTitle">New Product</h1>
          <form className="addProductForm">
            <div className="addProductItem">
              <label>Name</label>
              <input type="text" placeholder="T shirt"
                value={name}
                onChange={(e) => setName(e.target.value)} />

            </div>
            <div className="addProductItem">
              <label>Category</label>
              <select
                defaultValue={Category}
                onChange={handleSelect}
                name="active" id="active">
                <option value="Man">Man</option>
                <option value="Woman">Woman</option>
                <option value="Child">Child</option>

              </select>
            </div>

            <div className="addProductItem">
              <label>Sub Category</label>
              <input type="text" placeholder="abc"
                value={Sub_Category}
                onChange={(e) => setSub(e.target.value)} />

            </div>
            <div className="addProductItem">
              <label>Price</label>
              <input type="number" placeholder="123"
                value={price}
                onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className="addProductItem">
              <label>Description</label>
              <textarea placeholder="Product Description"
                value={Description}
                onChange={(e) => setDes(e.target.value)} />
            </div>
            <div className="addProductItem">
              <label>Stock</label>
              <input type="number" placeholder="5"
                value={In_Stock}
                onChange={(e) => setIn(e.target.value)} />
            </div>
            <div className="addProductItem">
              <label>Offer</label>
              <input type="text" placeholder="Summer"
                value={Offer}
                onChange={(e) => setOffer(e.target.value)} />
            </div>
          </form>
        </div >

        <button type="submit" className="addProductButton" onClick={updateHandler}>Update</button>

      </div>



        
        </div>
    )
}

export default UpdateProduct
