import { useEffect, useState } from "react";
import axios from "axios";

function BlogApp() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((response) => {
        setPosts(response.data.posts);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load blog posts.");
        setLoading(false);
      });
  }, []);

  return (
    <section className="blog-app">
      <h1>My Blog</h1>

      {selectedPost && (
  <div className="selected-post">
    <button onClick={() => setSelectedPost(null)}>
      Back to all posts
    </button>

    <h2>{selectedPost.title}</h2>
    <p>{selectedPost.body}</p>
  </div>
)}

      {loading && <p>Loading blog posts... </p>}

      {error && <p className = "error-message">{error}</p>}

      {!loading && !error && posts.length === 0 &&(
        <p className="empty-message">No blog posts available.</p>
      )}

    {!selectedPost && (

      <div className="blog-grid">
        {posts.map((post) => (

          <article className="blog-card" key={post.id}>

            <h3>{post.title}</h3>
            <p>{post.body}</p>

            <button onClick={() => setSelectedPost(post)}>
              Read More
            </button>
          </article>
        ))}
      </div>
      )}

    </section>
  );
}

export default BlogApp;