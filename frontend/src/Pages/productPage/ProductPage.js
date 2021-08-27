import React from 'react'
import { Row, Col, Image, ListGroup, Card, Button, Form, Container } from 'react-bootstrap'
import Header from '../../components/Header'
import Rating from '../../components/Rating'
import products from '../../products'
import Footer from '../../components/Footer'

function ProductPage({ match }) {
    const product = products.find((p) => p._id === match.params.id)
    return (
        <>
            <Header />
            <Container>
                <br />
                <Row>

                    <Col md={4}>
                        <Image src={product.image} alt={product.name} style={{ height: '500px', width: '350px' }} />
                    </Col>
                    <Col md={3}>

                        <ListGroup>

                            <ListGroup.Item>

                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating
                                    value={product.rating}
                                    text={`${product.numReviews} reviews`}
                                />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Price:  {product.price} TK
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description:  {product.description}
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
                                            <strong>{product.price} TK</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                            {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                {product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Qty</Col>
                                            <Col>
                                                <Form.Control
                                                    as='select'

                                                >
                                                    {[...Array(product.countInStock).keys()].map(
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

                                        className='btn-block'
                                        type='button'
                                        disabled={product.countInStock === 0}
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
