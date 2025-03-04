import React from 'react'
import { Outlet } from 'react-router'
import SearchInput from '../../components/search-input/SearchInput'
import TitleLine from '../../components/title-line/TitleLine'
import NewsCard from '../../components/news-card/NewsCard'
import './blogread.css'

const BlogRead = () => {
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-md-9">
                <Outlet />
            </div>
            <div className="col-md-3">
                <SearchInput />
                <TitleLine title="Kategori" />
                <div className="card-container">
                      <ul>
                        <li>
                            <NewsCard 
                                imageUrl={"../../../public/images/category/img-kategori-kabar-umrah-haji.webp"}
                                text={"Kabar Haji & Umroh"}
                                link={"/blog/read/category/"}
                            />
                        </li>
                        <li>
                            <NewsCard 
                                imageUrl={"../../../public/images/category/img-kategori-khazanah-01.webp"}
                                text={"Khazanah"}
                                link={"/blog/read/category/khazanah"}
                            />
                        </li>
                        <li>
                            <NewsCard />
                        </li>
                        <li>
                            <NewsCard />
                        </li>
                        <li>
                            <NewsCard />
                        </li>
                        <li>
                            <NewsCard />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default BlogRead
