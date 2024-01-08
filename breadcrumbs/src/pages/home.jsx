import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        const slicedTrendingProducts = data.products.slice(0, 8);
        setAllProducts(slicedTrendingProducts);
      });
  }, []);

  return (
    <div>
      <h2 className="heading2">Home Page</h2>
      <div className="product-grid">
        {allProducts?.map((product) => (
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

      <Link to="/products">
        <button>View All Products</button>
      </Link>
    </div>
  );
};

export default Home;