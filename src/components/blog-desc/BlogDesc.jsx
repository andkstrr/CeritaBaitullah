import React, { useState, useEffect } from 'react'
import { FaUser, FaCalendar } from 'react-icons/fa'
import { Link, useParams } from 'react-router'
import { blog } from '../../assets/data/data'
import './blogdesc.css'

const BlogDesc = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const foundBlog = blog.find((item) => item.id === Number(id));
    setBlogs(foundBlog || null); // Jika tidak ditemukan, set null
  }, [id]);

  if (!blogs) {
    return <p>Blog tidak ditemukan</p>; // Tampilkan pesan jika blog tidak ada
  }

  return (
    <>
      <div className="headerBlog">
        <p className="btn-category">{blogs.category}</p>
        <h2 className="title">{blogs.title}</h2>
        <div className="credit">
          <div className="author">
            <FaUser size={15} color="gray" />
            <p>
              <Link to="/naswa-baitullah" className="author-name">
                Naswa
              </Link>
            </p>
          </div>
          <div className="date">
            <FaCalendar size={15} color="gray" />
            <p>{blogs.date}</p>
          </div>
        </div>
      </div>
      <div className="blog-cover">
        {blogs.cover ? <img src={blogs.cover} alt="Blog Cover" /> : <p>Gambar tidak tersedia</p>}
      </div>
      <p className="desc">{blogs.desc}</p>
    </>
  );
};

export default BlogDesc;
