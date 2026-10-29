import UserList from "../api/UserList";

import {useNavigate} from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

  const stats = [
    {
      emoji: "👥",
      title: "Total Users",
      value: "1,250",
    },
    {
      emoji: "📦",
      title: "Total Products",
      value: "320",
    },
    {
      emoji: "🛒",
      title: "Total Orders",
      value: "845",
    },
    {
      emoji: "💰",
      title: "Total Revenue",
      value: "$12,500",
    },
  ];

  const activities = [
    "New user registered",
    "New order received",
    "Product inventory updated",
    "New customer review received",
  ];

  return (
    <div className="dashboard">

      <header className="dashboard-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p>Welcome back! Here's your overview.</p>
        </div>
      </header>

      <section className="stats-container">

        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>

            <span>{stat.emoji}</span>
            <h3>{stat.title}</h3>
            <h2>{stat.value}</h2>

          </div>
        ))}

      </section>

      <section className="activity-section">

        <h2>Recent Activity</h2>

        {activities.map((activity, index) => (
          <div className="activity-item" key={index}>
            <p>{activity}</p>
          </div>
        ))}

      </section>

      <section className="quick-actions">

        <h2>Quick Actions</h2>

        <button onClick={() => navigate("/register")}>Add New User</button>
        <button>View Orders</button>
        <button>Manage Users</button>

      </section>

      <UserList />

    </div>
  );
}

export default Dashboard;
