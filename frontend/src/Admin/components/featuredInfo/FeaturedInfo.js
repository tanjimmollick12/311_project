import "./featuredInfo.css";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux'
export default function FeaturedInfo() {
  const adminLogin = useSelector((state) => state.adminLogin)
  const { adminInfo } = adminLogin

  const config = {
    headers: {
      Authorization: 'Bearer ' + adminInfo.token
    },
  }

  const [totalSale, setTotalsale] = useState()

  useEffect(() => {

    axios.get('http://127.0.0.1:8000/api/totalsale', config)
      .then(resp => {
        setTotalsale(resp.data)
      })
  }, )



  return (


    <div className="featured">

      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{totalSale} TK</span>
        </div>

      </div>

    </div>
  );
}
