import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      return response.json();
    })
    .then((data) => {
      setUsers(data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false);
    });
}, []);

  return (
    <section className="user-list">
      <h1>User Listing</h1>

      {loading && <p>Loading users...</p>}
      
      {error && <p className="error-message">{error}</p>}

      {error && <p className="error-message">{error}</p>}

      <div className="user-grid">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <h3>{user.name}</h3>

            <p>
              <strong>Username:</strong> {user.username}
            </p>

            <p>
              <strong>Email:</strong> {user.email}
            </p>

            <p>
              <strong>Phone:</strong> {user.phone}
            </p>

            <p>
              <strong>City:</strong> {user.address.city}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UserList;