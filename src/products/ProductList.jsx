import { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
            setProducts(response.data);
        })
        .catch((error) => {
            setError("Failed to load products.");
        });
  }, []);

  return (
    <section className="product-list">
      <h1>Products</h1>

      {error && <p className="error-message">{error}</p>}

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />

            <h3>{product.title}</h3>

            <p>{product.description}</p>

            <strong>${product.price}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;