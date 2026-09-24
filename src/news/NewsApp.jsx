import { useEffect, useState } from "react";
import axios from "axios";

function NewsApp() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setArticles(response.data);
        setLoading(false);
      })
      
      .catch((error) => {
        setError("Failed to load news articles.");
        setLoading(false);
      });
      
  }, []);

  return (
    <section className="news-app">
      <h1>Latest News</h1>

      {error && <p className="error-message">{error}</p>}

      {loading && <p>Loading news...</p>}

      <div className="news-grid">
        {articles.map((article) => (
          <article className="news-card" key={article.id}>
            <p className="news-number">Article {article.id}</p>

            <h3>{article.title}</h3>

            <p>{article.body}</p>

            <button>Read More</button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default NewsApp;