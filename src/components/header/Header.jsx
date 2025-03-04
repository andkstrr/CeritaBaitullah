import React from 'react'
import SearchInput from '../search-input/SearchInput'
import { RxHamburgerMenu } from 'react-icons/rx'
import { GrInstagram } from "react-icons/gr";
import { FaFacebook, FaYoutube, FaTiktok, FaSearch } from 'react-icons/fa'
import './header.css'

const Header = () => {
  return (
    <>
      <header>
        <div className="header-container">
          <div className="media-icons">
            <RxHamburgerMenu size={30} color="#fff" />
            <FaFacebook color="#fff" />
            <FaYoutube color="#fff" size={19} />
            <GrInstagram color="#fff" size={14} />
            <FaTiktok color="#fff" size={15} />
          </div>

          <div className="search-header">
            <div className="search-wrapper">
              <input placeholder="Cari Artikel . . ." />
              <FaSearch size={15} color="#fff" />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
