import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
// import "./ProductListing.css"; // Import the CSS file for styling

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <h2 className="heading2">All Products</h2>
      <div className="product-grid">
        {products?.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/products/${product.id}`}>
              <img src={product.thumbnail} alt={product.title} />
              <hr />
              <h3>{product.title}</h3>
              <hr />
              <h3>${product.price}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;