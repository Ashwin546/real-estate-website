// SignUp.js
import React, { useState } from 'react';
import './SignUp.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  
  const Navigate=useNavigate(); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            name,
            email,
            password
          }
        ),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      // Optionally, you can handle success (e.g., redirect to login page)
      console.log('Signup successful!');
    } catch (error) {
      // Handle signup error
      console.error('Signup failed:', error.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your sign-up logic here, e.g., make an API call
    handleSignup();
    Navigate('/login')
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
            value={name}
            onChange={(e)=>(setName(e.target.value))}
            className="SignUpInput"
            required
          />
        </label>
        <label className='input-label'>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e)=>(setEmail(e.target.value))}
            className="SignUpInput"
            required
          />
        </label>
        <label className='input-label'>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e)=>(setPassword(e.target.value))}
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
