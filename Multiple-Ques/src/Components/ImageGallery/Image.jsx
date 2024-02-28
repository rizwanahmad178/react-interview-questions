import React from 'react'
import './ImageGallery.css'
function Image({src}) {
  return (
    <div className='image'>
      <img src={src} alt="Image" />
    </div>
  )
}

export default Image
