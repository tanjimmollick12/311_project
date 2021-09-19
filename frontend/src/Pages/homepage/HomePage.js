import React,{ useEffect } from 'react'
import products from '../../products'
import { Container } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Product from '../../components/Product'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { useDispatch, useSelector } from 'react-redux'
import {listProducts} from '../../actions/productActions'
import './homepage.css'
const HomePage = ({ match }) => {

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
    console.log(products)
  return (
    <div>


      <Header />
     
      
      <div className='home-css'>
        <main className='py-3'>
          <Container>

            <h1>Latest Products</h1>
            

        
            <Row>
              {products.map(
                product => (
                  <Col sm={12} md={6} lg={3} xl={4}>

                    <Product product={product} />
                  </Col>


                )

              )}

            </Row>
      

          </Container>
        </main>

        <Footer />
      </div>

    </div>


  )

  return 0;
}

export default HomePage
