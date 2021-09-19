import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import { useState,useEffect } from 'react';
import Footer from '../../../components/Footer'
import {useSelector } from 'react-redux'
import axios from 'axios';
function Home() {

  const adminLogin = useSelector((state) => state.adminLogin)
  const { adminInfo } = adminLogin

  const config = {
    headers: {
      Authorization: 'Bearer ' + adminInfo.token
    },
  }

  const [products, setProduct] = useState([])
  useEffect(() => {

    axios.get('http://127.0.0.1:8000/api/analysis', config)
      .then(resp => {
        setProduct(resp.data)
      })
  }, [])

  return (
    <div className="home">
     <FeaturedInfo />
     <Chart data={products} title="Product Analysis" grid dataKey= "totalSale" />
    <Footer/>
    </div>
  )
}

export default Home
