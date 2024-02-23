import React, {useState} from 'react'

function Todo() {
    const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const handleChange = (e)=>{
    setText(e.target.value);
  }
  function handleClick(e){
    e.preventDefault();
    setTodo([...todo, text]);
    setText("");
  }
  const handleRemove=(index)=>{
    const updatedTodo = todo.filter((x,idx)=> idx!=index);
    setTodo(updatedTodo);
  }
  return (
    <div className='container'>
      <form action="">
        <input type="text" placeholder='Enter your work here...' value={text} onChange={handleChange}/>
        <button onClick={handleClick}>Add to list</button>
      </form>
      <ul>{
          todo.map((td, idx)=>{
            return (
              <li>{td}
              <button onClick={()=>handleRemove(idx)}>Remove</button></li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Todo
