import { useEffect, useMemo, useRef, useState } from "react"
import './SearchBar.css';
function SearchBarApp() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState("")

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      return item.toLowerCase().includes(query.toLowerCase())
    })
  }, [items, query])
  useEffect(() => { 
    const fetchData = async () => { 
        const response = await fetch("https://jsonplaceholder.typicode.com/users");  
        const res = await response.json(); 
        res.map((e)=>{
          setItems(prev => {
            return [...prev, e.name]
          })
        })
    };
    fetchData();
}, []); 
  return (
    <div className="SearchApp">
      <label htmlFor="input">Search : </label> 
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        type="search"
        placeholder="Type a name..."
      />
      <h1>-: Names :-</h1>
      {filteredItems.map((item, id) => (
        <div key={id}>{item}</div>
      ))}
    </div>
  )
}

export default SearchBarApp