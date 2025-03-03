import React from 'react'
import './titleline.css'

const TitleLine = ({ title }) => {
  return (
    <div className="title-line-container">
      <h6 className="title-line">{title}</h6>
      <div className="underline-wrapper">
        <div className="underline-left"></div>
        <div className="underline-right"></div>
      </div>
    </div>
  );
};

export default TitleLine
