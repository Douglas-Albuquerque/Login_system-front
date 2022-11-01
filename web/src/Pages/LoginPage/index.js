import React, { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/auth';
import "./styles.css"


const LoginPage = () => {
  const { authenticated, login } = useContext
    (AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("enviado", { email, password });

    login(email, password);
  }

  return (
    <div className='login'>
      <h1 className='title'> Login do sistema</h1>
      <p>{String(authenticated)}</p>
      <form className='form' onSubmit={handleSubmit}>
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
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;