import React from 'react'
import './titleline.css'

const TitleLine = ({ title }) => {
  return (
    <>
      <div className="widget-title">
        <h6 className="title">{title}</h6>
      </div>
    </>
  )
}

export default TitleLine
