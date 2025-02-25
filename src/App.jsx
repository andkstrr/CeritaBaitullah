import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router"
import Header from './components/header/Header'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Blog from './pages/blog/Blog'
import BlogDetails from './pages/blog-details/BlogDetails'
import BlogCategory from './pages/blog-category/BlogCategory'
import Naswa from './pages/author/Naswa'
import Contact from './pages/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/read/:id" element={<BlogDetails />} />
            <Route path="/blog/read/category/:category" element={<BlogCategory />} />
            <Route path="/naswa-baitullah" element={<Naswa />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
