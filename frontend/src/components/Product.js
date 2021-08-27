import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import './product.css'
function Product({ product }) {
    return (
        
    <Card className='prod'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text= {`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>{product.price} TK</Card.Text>
      </Card.Body>
    </Card>
       
    )
}

export default Product
