import React from 'react'
import { Link } from 'react-router'
import { FiArrowUpRight } from 'react-icons/fi'
import './NewsCard.css'

const NewsCard = ({ imageUrl, text, link }) => {
  return (
    <Link to={link} className="news-card">
      {/* Background Image */}
      <div
        className="news-card-bg"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      {/* Overlay */}
      <div className="news-card-overlay"></div>

      {/* Text */}
      <div className="news-card-text">{text}</div>

      {/* Arrow Icon */}
      <div className="news-card-icon">
        <FiArrowUpRight size={21} />
      </div>
    </Link>
  );
};

export default NewsCard;
