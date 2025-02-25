import React, { useState, useEffect } from 'react'
import { FaUser, FaCalendar } from 'react-icons/fa'
import { Link, useParams } from 'react-router'
import { blog } from '../../assets/data/data'
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
              {/* Pastikan src memiliki nilai valid */}
              {blogs.cover ? (
                <img src={blogs.cover} alt="Blog Cover" />
              ) : (
                <p>Gambar tidak tersedia</p>
              )}
              <p className="desc">{blogs.desc}</p>
            </div>

            <div className="content-right">
              <p>Ini adalah area untuk konten di sebelah kanan. wkwkwkwkw</p>
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
