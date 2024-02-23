import React, { useState } from 'react'

function BasciCal() {
    const [val, setVal] = useState();
  const [ans, setAns] = useState();
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  const handleBtn = (e) => {
    e.preventDefault();
    setAns(eval(val));
  };
  return (
    <div>
      <input type="text" value={val} onChange={handleChange} />
      <button onClick={handleBtn}>Result</button>
      <br />
      <span>Calculated Value : {ans}</span>
    </div>
  )
}

export default BasciCal
