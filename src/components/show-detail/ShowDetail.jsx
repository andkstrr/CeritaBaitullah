import React, { useState, useEffect } from 'react'
import { FaUser, FaCalendar } from 'react-icons/fa'
import { Link, useParams } from 'react-router'
import { blog } from '../../assets/data/data'
import NewsCard from '../news-card/NewsCard'
import SearchInput from '../search-input/SearchInput'
import TitleLine from '../title-line/TitleLine'
import './details.css'
import '../../index.css'

const DetailBlog = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    const foundBlog = blog.find((item) => item.id === Number(id))
    setBlogs(foundBlog || null)  // Jika tidak ditemukan, set ke null
  }, [id])  // Tambahkan id sebagai dependensi

  return (
    <>
      {blogs ? (
        <section className="detailPage">
          <div className="container">
            <div className="content-left">
              <div className="headerBlog">
                <p className="btn-category">{blogs.category}</p>
                <h2 className="title">{blogs.title}</h2>
                <div className="credit">
                  <div className="author">
                    <FaUser size={15} color="gray" />
                    <p><Link to="/naswa-baitullah" className="author-name">Naswa</Link></p>
                  </div>
                  <div className="date">
                    <FaCalendar size={15} color="gray" />
                    <p>{blogs.date}</p>
                  </div>
                </div>
              </div>
              {blogs.cover ? (
                <img src={blogs.cover} alt="Blog Cover" />
              ) : (
                <p>Gambar tidak tersedia</p>
              )}
              <p className="desc">{blogs.desc}</p>
            </div>

            <div className="content-right">
              <SearchInput />
              <TitleLine title="Kategori" />
              <div className="category-card">
                <NewsCard
                  imageUrl="../../../images/category/img-kategori-kabar-umrah-haji.webp"
                  text="KABAR HAJI & UMRAH"
                  link="/blog/read/category/kabar haji umroh"
                />
                <NewsCard
                  imageUrl="../../../images/category/img-kategori-khazanah-01.webp"
                  text="KHAZANAH"
                  link="/blog/read/category/khazanah"
                />
                <NewsCard
                  imageUrl="../../../images/category/img-kategori-tips-1.webp"
                  text="TIPS"
                  link="/blog/read/category/tips"
                />
                <NewsCard
                  imageUrl="../../../images/category/img-kategori-kisah-01.webp"
                  text="KISAH"
                  link="/blog/read/category/kisah"
                />
                <NewsCard
                  imageUrl="../../../images/category/img-kategori-doa-01.webp"
                  text="DOA"
                  link="/blog/read/category/doa"
                />
                <NewsCard
                  imageUrl="../../../images/category/img-kategori-kabar-umrah-haji.webp"
                  text="PERJALANAN"
                  link="/blog/read/category/perjalanan"
                />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p>Blog tidak ditemukan</p>
      )}
    </>
  )
}

export default DetailBlog