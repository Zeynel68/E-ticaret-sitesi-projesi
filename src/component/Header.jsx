import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import Logo from "../img/legend-logo.jpg"
import Home from '../pages/Home';
import computer from "../img/computer.jpg"

function Header() {
    useEffect(() => {
        <Home />
    }, [])
    return (
        <div className='main'>
            <div id="logo">
                <img src={Logo} alt="" />
                <div ><h4 className='logo-text'>LEGEND</h4></div>
            </div>

            <div className='head-text'>

                <div className='home' style={{
                    fontWeight: 500,
                    color: "blue",
                    textDecoration: "inherit"
                }}>
                    <Link to="/">

                        Home</Link>
                </div>

                <div className='prod'>
                    <Link to="/products">
                        Products</Link>
                </div>

                <div className='comments'>
                    <Link to="/comments">Comments</Link>
                </div>

                <div className='about'>
                    <Link to="/about">About</Link>
                </div>

                <div className='contact'>
                    <Link to="/contact">Contact</Link>
                </div>



                <div className='login'>
                    <Link to="/login">Login</Link>
                </div>

                <div className='signin'>
                    <Link to="/signin">Signin</Link>
                </div>


            </div>

        </div>
    )
}

export default Header
