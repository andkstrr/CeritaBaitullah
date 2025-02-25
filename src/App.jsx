import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router"
import Header from './components/header/Header'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Blog from './pages/blog/Blog'
import Naswa from './pages/author/Naswa'
import Contact from './pages/contact/Contact'
import Footer from './components/footer/Footer'
import Details from './pages/details/Details'


const App = () => {
  return (
    <>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-read/:id" element={<Details />} />
            <Route path="/naswa-baitullah" element={<Naswa />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
