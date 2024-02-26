import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
  logIn,
  logOut,
} from "./action";

function Counter() {
  const counter = useSelector((state) => state.counter);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>
         Hello World <br /> A little Redux Project. YaaY!
      </h1>
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>

      <h2>For Logged in users only</h2>
      <p>Log in to see a secret about me</p>
      <button onClick={() => dispatch(logIn())}>Login</button>
      <button onClick={() => dispatch(logOut())}>Logout</button>
      {auth ? (
        <div>
          <p>
            I don't know more than 50% of redux. But if you know 50% of it, you're like a Superman.
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Counter;





// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { increment, decrement, reset } from './action';

// function Counter() {
//     const count = useSelector(state=>state.count);
//     const dispatch = useDispatch();
//     // const [count, setCount] = useState(0);
//     // const handleIncrement = ()=>{
//     //     setCount(count+1);
//     // }
//     // const handleDecrement = ()=>{
//     //     setCount(count-1);
//     // }
//     // const handleReset = ()=>{
//     //     setCount(0);
//     // }
//   return (
//     <div>
//         <h2>Count : {count}</h2>
//         <button onClick={()=>dispatch(increment)}>Increment</button>
//         <button onClick={()=>dispatch(decrement)}>Decrement</button>
//         <button onClick={()=>dispatch(reset)}>Reset</button>
//     </div>
//   )
// }

// export default Counter
