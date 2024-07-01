// Register.js

import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { username, email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', {
        username,
        email,
        password
      });
      console.log(res.data); // Handle successful registration, e.g., redirect
    } catch (err) {
      console.error(err.response.data); // Handle registration error
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Username" name="username" value={username} onChange={onChange} required />
      <input type="email" placeholder="Email Address" name="email" value={email} onChange={onChange} required />
      <input type="password" placeholder="Password" name="password" value={password} onChange={onChange} minLength="6" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
