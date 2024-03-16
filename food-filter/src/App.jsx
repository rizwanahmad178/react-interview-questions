import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from './Data';
import Card from "./Card";
import Buttons from "./Buttons";

function App() {
  const [item, setItem] = useState(Data);
  // console.log(item);
  const menuItems = [...new Set(Data.map((val)=>val.category))];
  const filteredItems = (cat) =>{
    const newItems = Data.filter((val) => val.category === cat)
    setItem(newItems);
  }
  return (
    <div className="container-fluid">
      <div className="row">
      <h1 className="text-center col-span-12 fw-bold mt-3 mb-5">Food Filter App</h1>
      </div>
      <Buttons  menuItems={menuItems} filteredItems={filteredItems}
      setItem={setItem}/>
      <Card item={item}/> 
    </div>
  );
}

export default App;
