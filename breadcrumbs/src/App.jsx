import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import "./App.css";
import Breadcrumbs from "./components/breadcrumbs";
import ProductsList from "./pages/products";
import ProductDetails from "./pages/productsDetails";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <h1 className="heading">Breadcrumbs : React | Router | Hooks</h1>
        <Breadcrumbs />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;