import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import {userData} from "../../../dummyData"
import Footer from '../../../components/Footer'

function Home() {
  return (
    <div className="home">
     <FeaturedInfo />
     <Chart data={userData} title="Product Analysis" grid dataKey="Active User"/>
    <Footer/>
    </div>
  )
}

export default Home
