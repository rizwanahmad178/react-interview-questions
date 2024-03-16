import React from 'react'
import Data from './Data'
function Buttons({menuItems, filteredItems, setItem}) {
  return (
    <div className='btn-div'>
      {
        menuItems.map((val)=>{
            return (
                <button className='btn-dark text-white p-1 px-2 mx-5 btn fw-bold'
                onClick={()=>filteredItems(val)}>
                    {val}
                </button>
            )
        })
      }
      <button className='btn-dark text-white p-1 px-2 mx-5 btn fw-bold' 
      onClick={()=>setItem(Data)}
      >All</button>
    </div>
  )
}

export default Buttons
