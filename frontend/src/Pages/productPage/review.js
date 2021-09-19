import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Header from '../../components/Header'
import axios from 'axios'
function Review({ match }) {
    const productId = match.params.id
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    if (!userInfo) {
        document.location.href = '/login'
    }
    const config = {
        headers: {
            Authorization: 'Bearer ' + userInfo.token
        },
    }

    const [oid, setOid] = useState('')
    const [rating, setRating] = useState('')
    const [comment, setComment] = useState('')

    console.log(productId)

    const data = { oid, rating, comment }
    const [message, setMessage] = useState()
    async function submitHandler() {


        await axios.post(`http://127.0.0.1:8000/api/review/${productId}`, data, config)
            .then(resp => {
                setMessage(resp.data.message)
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div>

            <Header />
            <Message variant='danger'>{message}</Message>

            <div style={{ padding: "5px 5px 20px 580px", backgroundColor: "#f5f5f5" }}>
                <div className="addProductItem">
                    <label>Order ID</label>
                    <input type="number" placeholder="5"
                        value={oid}
                        onChange={(e) => setOid(e.target.value)} />
                </div>

                <div className="addProductItem">
                    <label>Rating</label>
                    <input type="number" placeholder="5"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)} />
                </div>
                <div className="addProductItem">
                    <label>Comment</label>
                    <textarea placeholder="Product Description"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)} />
                </div>
                <button type="submit" className="addProductButton" onClick={submitHandler}>Submit</button>
            </div>

        </div>
    )
}

export default Review
