// Dashboard.js
import React from "react";
import { Navigate } from "react-router-dom";

const Dashboard = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    // 🚫 Redirect to login if not logged in
    return <Navigate to="/login" replace />;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>📊 Dashboard</h1>
      <p>Welcome! You are successfully logged in.</p>
    </div>
  );
};

export default Dashboard;
