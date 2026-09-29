import { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] =useState(true);

  useEffect(() => {
    axios
        .get("https://dummyjson.com/products")
        .then((response) => {
            setProducts(response.data.products);
            setLoading(false);
        })
        .catch((error) => {
            setError("Failed to load products.");
            setLoading(false);
        });
  }, []);

  return (
    <section className="product-list">
      <h1>Products</h1>

      {error && <p className="error-message">{error}</p>}

      {!loading && !error && products.length === 0 && (
        <p className="empty-message">No products available.</p>
      )}

      {loading && <p>Loading products...</p>}

      {!loading && !error &&(

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />

            <h3>{product.title}</h3>

            <p>{product.description}</p>

            <strong>${product.price}</strong>
          </div>
        ))}
      </div>
      )}
    </section>
  );
}

export default ProductList;