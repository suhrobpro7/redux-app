import React, { useState } from "react";
import axios from "axios";

const EnquiryForm = ({ courseId, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEnquiry = {
      courseId,
      name,
      email,
      message,
    };

    // Post enquiry to the JSON server
    axios.post('http://localhost:3001/enquiries', newEnquiry)
      .then(response => {
        onSubmit();
      })
      .catch(error => console.error('Error submitting enquiry:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Message:</label>
        <textarea value={message} onChange={e => setMessage(e.target.value)} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EnquiryForm;
