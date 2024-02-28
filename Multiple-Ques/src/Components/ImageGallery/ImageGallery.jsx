import React, { useState } from 'react'
import ImageGrid from './ImageGrid';

function ImageGallery() {
    const [images, setImages] = useState([
        'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg',
        'https://images.pexels.com/photos/17880230/pexels-photo-17880230/free-photo-of-calm.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/1028203/pexels-photo-1028203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://media.gettyimages.com/id/1090242410/photo/young-couple-relaxing-on-lake-pier-on-overcast-day-enjoying-nature-and-green-environment.jpg?s=612x612&w=gi&k=20&c=LB0q5nlXqBU1AJvp0SF6saEzlOSmcX-mTBeX4Ap_428=',
        'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
        'https://png.pngtree.com/background/20230411/original/pngtree-natural-landscape-snow-mountain-background-picture-image_2390197.jpg'
        // Add more image URLs here
      ]);
  return (
    <div className='ImageGalleryApp'>
      <h1>Image Gallery</h1>
      <ImageGrid images={images} />
    </div>
  )
}

export default ImageGallery
