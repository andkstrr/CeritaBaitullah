import React, { useState } from 'react'
import { FaUser, FaCalendar } from 'react-icons/fa'
import { Link } from 'react-router'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { blog } from '../../assets/data/data'
import './details.css'
import '../../index.css'

const DetailBlog = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id))
    if (blogs) {
      setBlogs(blogs)
    }
  }, [])

  return (
    <>
      {blogs ? (
        <section className="detailPage">
          <div className="container">
            {/* Bagian Kiri - 60% */}
            <div className="content-left">
              <div className="headerBlog">
                <p className="btn-category">{blogs.category}</p>
                <h2 className="title">{blogs.title}</h2>
                <div className="credit">
                  <div className="author">
                    <FaUser size={15} color="gray" />
                    <p><Link to="/naswa-baitullah" >Naswa</Link></p>
                  </div>
                  <div className="date">
                    <FaCalendar size={15} color="gray" />
                    <p>{blogs.date}</p>
                  </div>
                </div>
              </div>
              <img src={blogs.cover} alt="Blog Cover" />
              <p className="desc">{blogs.desc}</p>
            </div>

            {/* Bagian Kanan - 40% */}
            <div className="content-right">
              <p>Ini adalah area untuk konten di sebelah kanan. wkwkwkwkw</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}

export default DetailBlog