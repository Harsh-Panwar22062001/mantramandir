import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <section className="h-wrapper">

<div className=" flexcenter innerWidth flexCenter h-container">

    <img src="./logoimage.png" alt='logo' width={100} ></img>


    <div className=" flexCenter h-menu">
        <a href="">Residencies</a>
        <a href="">Our Value</a>
        <a href="">Get Started</a>
        <a href="">Contact us</a>
        <button className='button'>
        <a href="">Contact</a>

        </button>
    </div>
</div>

    </section> 
    
  )
}

export default Header