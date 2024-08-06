import React from 'react'
import Header from "../component/Header"
import homelogo from "../img/eticaret.webp"
function Home() {
    return (
        <div>
            <Header />
            <div className='home-text'>
                <div>
                    <h2 className="başlık-1" >LEGEND is at the top now!</h2>
                    <h2 className="başlık-2" >Start shopping with LEGEND now.</h2>
                </div>
                <img className="home-logo" src={homelogo} alt="" />
            </div>
        </div>

    )
}

export default Home
