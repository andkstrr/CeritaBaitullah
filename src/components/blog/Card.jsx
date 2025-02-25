import React from "react"
import { blog } from "../../assets/data/data"
import { Link } from "react-router"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineEdit, } from "react-icons/ai"
import "./card.css"

const Card = () => {
  return (
    <>
      <section className='blog'>
        <div className='container grid3'>
          {blog.map((item) => (
            <div className='box boxItems' key={item.id}>
              <div className='img-wrapper'>
                <Link to={`/blog/read/${item.id}`} className='link'>
                  <img className="img" src={item.cover} alt='' />
                </Link>
              </div>
              <div className='blog-read'> 
                <div className='tag'>
                  <AiOutlineTags className='icon' />
                  <Link to={`/blog/read/category/${item.category}`} className="link">#{item.category}</Link>
                </div>
                <Link to={`/blog/read/${item.id}`} className='link'>
                  <h3>{item.title}</h3>
                  <p>{item.desc.slice(0, 180)}...</p>
                </Link>
                <Link to="/naswa-baitullah">
                    <div className='date'>
                      <AiOutlineEdit className='icon-bottom' /> <label htmlFor=''>{item.author}</label>
                      <AiOutlineClockCircle className='icon-bottom' /> <label htmlFor=''>{item.date}</label>
                    </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Card