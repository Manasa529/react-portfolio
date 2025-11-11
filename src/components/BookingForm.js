import React, { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
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

    // Validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.date || !formData.time) {
      setError("All fields are required!");
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(formData.email)) {
      setError("Invalid email format!");
      return;
    }

    setSuccess(`✅ Appointment booked successfully for ${formData.date} at ${formData.time}`);
  };

  return (
    <div>
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
        /><br/>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        /><br/>

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        /><br/>

        <input
          type="date"
          name="date"
          onChange={handleChange}
        /><br/>

        <input
          type="time"
          name="time"
          onChange={handleChange}
        /><br/>

        <button type="submit">Book Appointment</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}

export default BookingForm;
