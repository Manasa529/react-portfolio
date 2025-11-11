import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation checks
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("All fields are required!");
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // If all validations pass
    setSuccess("✅ Registration successful!");
  };

  return (
    <div>
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
        /><br/>

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
        /><br/>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        /><br/>

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        /><br/>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        /><br/>

        <button type="submit">Register</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}

export default RegistrationForm;
