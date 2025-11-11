import React from "react";

function ContactCard({ name, email, phone, address }) {
  return (
    <div style={{
      border: "2px solid #ccc",
      borderRadius: "10px",
      padding: "15px",
      margin: "10px",
      width: "250px",
      textAlign: "left",
      boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
      backgroundColor: "#fff"
    }}>
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Address:</strong> {address}</p>
    </div>
  );
}

export default ContactCard;
