import React from 'react'

function Card({item}) {
    // console.log(item);
  return (
    <div className='container'>
      <div className='row justify-center'>
        {item.map((val)=>{
            return (
                <div key={val.id} className='col-md-4 col-sm-6 card my-3 border-0'>
                <div className='card-img-top text-center'>
                    <img src={val.image} alt="Image" className='img'/>
                </div>
                <div className='card-body'>
                    <div className='card-title fw-bold fs-4'>
                        {val.name} :-- {val.price}
                    </div>
                    <div className='card-text'>
                        {val.description}
                    </div>
                </div>
            </div>
            )
        })}
      </div>
    </div>
  )
}

export default Card
