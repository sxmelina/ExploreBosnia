import React from 'react'
import './home.css'

const Home = () => {
  return (
<section className='home'>
<div className="secContainer container">
  <div className="homeText">
    <h1 className="title">
      Plan Your Trip With Travel Dot
    </h1>

    <p className="subTitle">
      Travel to your favorite city ....
    </p>

  <button className="btn">
    <a href="#">Explore Now</a>
  </button>
  </div>

  <div className="homeCard grid">
    <div className="locationDiv">
      <label htmlFor="location">Location</label>
      <input type="text" placeholder='Dream Destination' />
    </div>
  </div>

    <div className="homeCard grid">
    <div className="distDiv">
      <label htmlFor="distance">Distance</label>
      <input type="text" placeholder='11/Meters' />
      </div>
    </div>

    <div className="homeCard grid">
    <div className="priceDiv">
      <label htmlFor="price">Price</label>
      <input type="text" placeholder='100$' />
    </div>

  <button className='btn'>Search</button>
  </div>
</div>
</section>
  )
}

export default Home