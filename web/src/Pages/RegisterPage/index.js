import axios from 'axios';
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import "../LoginPage/styles.css"


const RegisterPage = () => {
  const navigate = useNavigate();

  const { login } = useContext
    (AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  }

  console.log();

  const navLogin = () => {
    navigate("/")
  }

  return (
    <div className='login'>
      <h1 className='title'> Registro de Usuário</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className='formField'>
          <label htmlFor="name">First Name</label>
          <input
            type="name"
            name='name'
            className='nameInput'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='formField'>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="lastName"
            name='lastName'
            className='lastNameInput'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className='formField'>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name='email'
            className='emailInput'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='formField'>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name='password'
            className='passwordInput'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='enterButton'>
          <button type='submit' onClick={navLogin}>Register</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage