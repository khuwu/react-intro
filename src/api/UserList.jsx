
import { useEffect, useState } from "react";
import { getUsers } from "./userService";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
  async function fetchUsers() {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  fetchUsers();
}, []);

  return (
    <section className="user-list">
      <h1>User Listing</h1>

      {loading && <p>Loading users...</p>}

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
