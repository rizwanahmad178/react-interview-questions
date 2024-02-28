import React from 'react'
import Image from './Image'

function ImageGrid({images}) {
  return (
    <div className='image-grid'>
        {images.map((image, index) => (
        <Image key={index} src={image} />
      ))}
    </div>
  )
}

export default ImageGrid
