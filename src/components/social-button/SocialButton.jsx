import React from 'react'
import './social-button.css'

const SocialButton = ({Icon, SocialMedia}) => {
  return (
    <>
      <div className="button-container">
        <button className="social-button">
             <div className="media-icon">{ Icon }</div>
             <div className="media-name">{ SocialMedia }</div>
        </button>
      </div>
    </>
  )
}

export default SocialButton
