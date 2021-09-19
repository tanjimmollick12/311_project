import React, { useState, useEffect } from 'react'
import { Row, Col, Image, ListGroup, Card, Button, Form, Container } from 'react-bootstrap'
import Header from '../../components/Header'
import Rating from '../../components/Rating'
import products from '../../products'
import Footer from '../../components/Footer'
import Message from '../../components/Message'
import { clearCart } from '../../actions/cartActions'
import Loader from '../../components/Loader'
import {listProductDetails} from '../../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
function ProductPage({ history, match }) {
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()
    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails
    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
      }, [dispatch,match])

      const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
      }
      const clearCartHandler = () =>{

        dispatch(clearCart())
      }
      function add_to() {
        clearCartHandler();
        addToCartHandler();
    }
    console.log(product.id)
    return (
        <>
            <Header />
            <Container key={product.id}>
                <br />
                <Row>

                    <Col md={4}>
                        <Image src={'http://127.0.0.1:8000/'+product.product_images} alt={product.product_name} style={{ height: '500px', width: '350px' }} />
                   
                 <Row>
                  <LinkContainer to={`/review/${match.params.id}`}>
                     <Button>Review</Button>

                     </LinkContainer>
                 </Row>
                    </Col>
                    <Col md={3}>

                        <ListGroup>

                            <ListGroup.Item>

                                <h3>{product.product_name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating
                                    value={product.rating}
                                    text={`${product.numOfReviews} reviews`}
                                />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Price:  {product.product_price} TK
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description:  {product.product_description}
                            </ListGroup.Item>

                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col>
                                            <strong>{product.product_price} TK</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                            {product.product_inStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                {product.product_inStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Qty</Col>
                                            <Col>
                                                <Form.Control
                                                    as='select'
                                                    value={qty}
                                                    onChange={(e) => setQty(e.target.value)}

                                                >
                                                    {[...Array(product.product_inStock).keys()].map(
                                                        (x) => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1}
                                                            </option>
                                                        )
                                                    )}
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}

                                <ListGroup.Item>
                                    <Button
                                   onClick={ add_to}
                                        className='btn-block'
                                        type='button'
                                        disabled={product.product_inStock === 0}
                                    >
                                        Add To Cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>

            </Container>
            <Footer />
        </>
    )
}

export default ProductPage
