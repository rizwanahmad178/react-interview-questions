import React, {useState} from 'react'

function Counter() {
    const [text, setText] = useState(0);
  const handleIncrease = () => {
    if (text < 20) {
      setText(text + 1);
    }
  };
  const handleDecrease = () => {
    if (text >= 1) {
      setText(text - 1);
    }
  };
  return (
    <div className="App">
      <h1>
        Count : <span>{text}</span>
      </h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default Counter
