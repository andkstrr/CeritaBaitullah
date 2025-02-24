import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router"
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import Footer from './components/footer/Footer'
import DetailsBlog from './pages/details/DetailsBlog'


const App = () => {
  return (
    <>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/details/:id" element={<DetailsBlog />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
