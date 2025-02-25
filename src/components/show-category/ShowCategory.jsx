import React from "react"
import { useParams } from "react-router"
import { blog } from "../../assets/data/data"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineEdit } from "react-icons/ai"
import { Link } from "react-router"

const BlogCategory = () => {
  const { category } = useParams();

  // Filter berdasarkan kategori
  const filteredBlogs = blog.filter((item) => item.category.toLowerCase() === category.toLowerCase());

  return (
    <section className="blog">
      <div className="container grid3">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((item) => (
            <div className="box boxItems" key={item.id}>
              <div className="img">
                <Link to={`/blog/read/${item.id}`} className="link">
                  <img src={item.cover} alt="" />
                </Link>
              </div>
              <div className="blog/read">
                <div className="tag">
                  <AiOutlineTags className="icon" />
                  <Link to={`/blog/read/category/${item.category}`} className="link">#{item.category}</Link>
                </div>
                <Link to={`/blog/read/${item.id}`} className="link">
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.desc.slice(0, 180)}...</p>
                <div className="date">
                  <AiOutlineEdit className="icon" /> <label>{item.author}</label>
                  <AiOutlineClockCircle className="icon" /> <label>{item.date}</label>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2>Tidak ada artikel dalam kategori ini</h2>
        )}
      </div>
    </section>
  );
};

export default BlogCategory;
