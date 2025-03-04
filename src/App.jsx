import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogDesc from './components/blog-desc/BlogDesc' // child component 
import BlogRead from './layouts/blog-read/BlogRead'
import BlogCategory from './pages/BlogCategory'
import Naswa from './pages/Naswa'
import Contact from './pages/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
      <BrowserRouter>
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/read/:id" element={<BlogRead />}>
              {/* Memanggil sebuah component pada sebuah layouts menggunakan Outlet */}
              <Route index element={<BlogDesc />} /> 
            </Route>
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
