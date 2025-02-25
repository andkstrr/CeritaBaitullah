import React from 'react';
import { Link } from 'react-router'
import { nav } from '../../assets/data/data'
import LogoCeritaBaitullah from '../../assets/images/logo-cerita baitullah.png'
import LogoBersamaBaitullah from '../../assets/images/bersama baitullah.png'
import './header.css';
import '../../index.css'

const Header = () => {
  return (
    <header>
      <div className="content-nav flex">
        <div className="logo">
          <Link to="/"><img src={LogoCeritaBaitullah} alt="Cerita Baitullah" width="120px" /></Link>
        </div>
        <nav>
          <ul>
            {nav.map((link) => {
              return (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="logo">
            <img src={LogoBersamaBaitullah} alt="Bersama Baitullah" width="130px"  />
        </div>
      </div>
    </header>
  );
};

export default Header
