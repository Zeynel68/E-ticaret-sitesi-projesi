import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/Header.css'
import { Routes, Route } from "react-router-dom"
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Comment from './pages/Comments'
import Computers from "./pages/computers"
import Smarts from "./pages/Smarts"
import Televisions from "./pages/Televisions"
import Telephones from "./pages/telephones"

import Dosyabulunamadi from './pages/Dosyabulunamadi'
import Sign from './pages/sign'
import Login from './pages/login'

function App() {


  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/comments" element={<Comment />} />
        <Route path="/signin" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/computers" element={<Computers />} />
        <Route path="/products/smartwatches" element={<Smarts />} />
        <Route path="/products/televisions" element={<Televisions />} />
        <Route path="/products/telephones" element={<Telephones />} />
        <Route path="*" element={<Dosyabulunamadi />} />

      </Routes>
    </div>
  )
}

export default App
