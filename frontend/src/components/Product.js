import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'
import './product.css'
function Product({ product }) {
  console.log(product)
    return (
        
    <Card className='prod'>
      <Link to={`/product/${product.id}`}>
        <Card.Img src={"http://127.0.0.1:8000/"+product.image_path} variant='top' />
        {console.log(product.image_path)}
      </Link>

      <Card.Body>
        <Link to={`/product/${product.id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
            
          </Card.Title>
        </Link>

        <Card.Text as='div'>
       
            In Stock={product.In_Stock}
          
          
        </Card.Text>

        <Card.Text as='h3'>{product.price} TK</Card.Text>
    
      </Card.Body>
    </Card>
       
    )
}

export default Product
