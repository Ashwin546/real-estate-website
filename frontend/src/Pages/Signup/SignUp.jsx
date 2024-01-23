// SignUp.js
import React, { useState } from 'react';
import './SignUp.css'; // Import the CSS file for styling

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your sign-up logic here, e.g., make an API call
    console.log('Form submitted:', formData);
  };

  return (
    <div className="SignUpWrapper">
      <h2>Sign Up</h2>
      <form className="SignUpForm" onSubmit={handleSubmit}>
        <label className='input-label'>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="SignUpInput"
            required
          />
        </label>
        <label className='input-label'>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="SignUpInput"
            required
          />
        </label>
        <label className='input-label'>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="SignUpInput"
            required
          />
        </label>
        <button type="submit" className="SignUpButton">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
