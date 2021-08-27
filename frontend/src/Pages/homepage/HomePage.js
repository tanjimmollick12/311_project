import React from 'react'
import products from '../../products'
import { Container } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Product from '../../components/Product'
import './homepage.css'
const HomePage = () => {

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
}

export default HomePage
