import React from 'react'
import Header from '../component/Header'
import computer from "../img/computer.jpg"
import television from "../img/television.jpg"
import telephone from "../img/telephones.jpg"
import smart from "../img/smartwatches.jpg"


function Products() {
    return (
        <div>


            <Header />
            <div className='arama-main'>
                <h2 className='search-title'>Phones, TVs, Computers, Smart Watches and More are here!</h2>
                <input type="text" className='arama-input' placeholder='Search for a product' />

                <button className='buton'>Search</button>
            </div>
            {/* Arama Altındaki Resimler */}
            <div className='search-foto'>



                <img className="computer-foto" src={computer} alt="" />
                <img className="smart-foto" src={smart} alt="" />
                <img className="television-foto" src={television} alt="" />
                <img className="telephone-foto" src={telephone} alt="" />


            </div>
        </div>
    )
}

export default Products
