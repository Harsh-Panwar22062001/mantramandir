import React from 'react'
import './Hero.css'
import {  HiLocationMarker} from 'react-icons/hi'
const hero = () => {
  return (
    <div className="hero-wrapper">
        <div className="paddings innerWidth flexcenter hero-container">

            <div className="flexColStart hero-left">
             <div className="hero-title">
             <div className="orange-circle">

             </div>

                <h1>

                    Discover <br/>
                    Most 
                    affordable <br/>
                    Property
                </h1>
             </div>

             <div className=" flexColStart hero-des">

            <span>
                Find the variety of Properties that suit you very easily
            </span>

            <span>
                Forget all difficulties in finding a residence for you
            </span>

             </div>

               <div className=" flexCenter search-bar">
         <HiLocationMarker color="var(--blue)" size={25}/>
                <input type="text" />
                <button className="button">Search</button>
               </div>

            </div>

            <div className=" flexCenter hero-right">
            <div className="image-container">
            <img src="./hero-image.png" alt=""  />


            </div>

            </div>
        </div>
    </div>
  )
}

export default hero