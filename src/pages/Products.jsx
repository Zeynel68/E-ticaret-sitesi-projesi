import React from 'react'
import { useState } from 'react'
import Header from '../component/Header'
import computer from "../img/computer.jpg"
import television from "../img/television.jpg"
import telephone from "../img/telephones.jpg"
import smart from "../img/smartwatches.jpg"
import bilgisayar1 from "../images/bilgisayar1.webp"




function Products() {

    const images = [
        { name: 'Lenovo IP Slim 3 Bilgisayar', price: "13.988.74", src: bilgisayar1, },
        { name: 'Lenovo IdeaPad 1 Bilgisayar', src: '' },
        { name: 'LENOVO LOQ/Core Bilgisayar', src: '' },
        { name: 'LENOVO LOQ/Core Bilgisayar', src: '' },
        { name: "HP Victus Gaming Bilgisayar", src: "" },
        { name: "HP 14S-DQ2011NT Bilgisayar", src: "" },
        { name: "Acer Aspire 3 Bilgisayar", src: "" },
        { name: "Acer Swift Go Bilgisayar", src: "" },
        { name: "Samsung Galaxy Book15 i7 Bilgisayar", src: "" },
        { name: "Apple MacBook Air M1 Bilgisayar", src: "" },
        { name: "Huawei Matebook 16s i9 Bilgisayar", src: "" },
        { name: "Apple iPhone 14 Pro Max Telefon", src: "" },
        { name: "Apple iPhone 15 Pro Max Telefon", src: "" },
        { name: "HUAWEI Pura 70 Telefon", src: "" },
        { name: "Samsung Galaxy S22 Ultra Telefon", src: "" },
        { name: "Samsung Galaxy A30 Telefon", src: "" },
        { name: "Samsung Galaxy A54 Telefon", src: "" },
        { name: "Xiaomi Redmi Note 12 Telefon", src: "" },
        { name: "Xiaomi Redmi Note 13 Telefon", src: "" },
        { name: "Altus AL55 Televizyon", src: "" },
        { name: "Altus AL65 Televizyon", src: "" },
        { name: "Vestel 32H8530 Televizyon", src: "" },
        { name: "Vestel 55U9530 Televizyon", src: "" },
        { name: "Samsung 65Cu70000 Televizyon", src: "" },
        { name: "Onvo 43 Televizyon", src: "" },
        { name: "Xiaomi Redmi Watch3", src: "" },
        { name: "Samsung Galaxy Watch7", src: "" },
        { name: "Huawei Watch4", src: "" },
        { name: "Huawei Watch Fit 3", src: "" },
    ];


    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredImages = images.filter(image =>
        image.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (

        <div>


            <Header />



            {/* Arama Altındaki Resimler */}



            <div className='search-foto'>
                <img className="computer-foto" src={computer} alt="" />
                <img className="smart-foto" src={smart} alt="" />
                <img className="television-foto" src={television} alt="" />
                <img className="telephone-foto" src={telephone} alt="" />
            </div>
            <div className='arama-main'>
                <h2 className='search-title'>Phones, TVs, Computers, Smart Watches and More are here!</h2>
                <input type="text" className='arama-input' value={searchTerm}
                    onChange={handleSearchChange} placeholder='Search for a product' />

                <button className='buton'>Search</button>
                <div className="image-gallery">
                    {filteredImages.map((image, index) => (
                        <div key={index} className="image-item">
                            <img src={image.src} alt={image.name} />
                            <div className='image-details'>
                                <p>{image.name}</p>
                                <p>{image.price}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};



export default Products
