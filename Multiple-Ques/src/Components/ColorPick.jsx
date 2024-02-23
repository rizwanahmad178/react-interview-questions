import React, { useState } from 'react'

function ColorPick() {
    const [selectedColor, setSelectedColor] = useState('#ffffff');
    const handleColorChange = (e)=>{
        setSelectedColor(e.target.value);
    } 
  return (
    <div>
      <h1>Color Picker</h1>
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
      />
      <div
        style={{
            width : '200px',
            height : '200px',
            backgroundColor : selectedColor,
            marginTop : '20px',
            border: '2px solid red'
        }}
        
      ></div>
      <p>Selected Color: {selectedColor}</p>
    </div>
  )
}

export default ColorPick
