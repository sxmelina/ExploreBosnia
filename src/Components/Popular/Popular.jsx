import React from 'react'
import './popular.css'
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

import img from '../../assets/viber_image_2024-05-21_13-27-24-989.jpg';
import img2 from '../../assets/viber_image_2024-05-21_13-27-14-795.jpg';
const Data = [
{
  id:1,
  imgSrc:img2,
  destTitle:'Machu Picchu',
  location:'Peru',
  grade:'CULTURAL RELAX',
},
{
  id:2,
  imgSrc:img2,
  destTitle:'Machu Picchu',
  location:'Peru',
  grade:'CULTURAL RELAX',
},
{
  id:3,
  imgSrc:img2,
  destTitle:'Machu Picchu',
  location:'Peru',
  grade:'CULTURAL RELAX',
},
{
  id:4,
  imgSrc:img2,
  destTitle:'Machu Picchu',
  location:'Peru',
  grade:'CULTURAL RELAX',
},
{
  id:5,
  imgSrc:img2,
  destTitle:'Machu Picchu',
  location:'Peru',
  grade:'CULTURAL RELAX',
},
{
  id:6,
  imgSrc:img2,
  destTitle:'Machu Picchu',
  location:'Peru',
  grade:'CULTURAL RELAX',
},
]
const Popular = () => {
  return (
    <section className='popular section container'>
<div className="secContainer">
  <div className="secHeader flex">
    <div className="textDiv">
      <h2 className="secTitle">
        Popular Destionation
      </h2>
        <p>
          From historical cities to natural spectaculars...
        </p>
    </div>
    <div className="iconsDiv flex">
    <BsArrowLeft className='icon leftIcon' />
    <BsArrowRight className='icon rightIcon'/>
    </div>
  </div>

    <div className="mainContent grid">
     {
      Data.map(({id, imgSrc, destTitle, location, grade})=>{
        return(
          <div className="singleDestination">
            <div className="destImage">

              <img src={imgSrc} alt="Image title" />

              <div className="overlayInfo">
                <h3>{destTitle}</h3>
                <p>
                  {location}
                </p>

                <BsArrowRight className='icon'/>
              </div>
            </div>

            <div className="destFooter">
              <div className="number">
                0{id}
              </div>
              <div className="destText flex">
                <h6>
                  London
                </h6>
                <span className='flex'>
                  <span className='dot'>
                    <BsDot className='icon'/>
                  </span>
                  Dot
                </span>
              </div>
            </div>
          </div>
        )
      })
     }
    </div>
</div>
    </section>
  )
}

export default Popular