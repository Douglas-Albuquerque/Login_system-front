import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../../styles/styles.css"
import { api } from "../../services/api"


const RegisterPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const register = async () => {

    const url = "/users/register"
    const options = {
      email: email,
      password: password,
      name: name,
      lastName: lastName
    }
    await api.post(url, options)
      .then(
        async response => {

          alert(response.data.message);
          navigate("/");

        }
      )
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          alert(error.response.data.error);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }

      });
  }
  const handleRegister = (e) => {
    e.preventDefault();

    register();
  }
  const handleLogin = () => {
    navigate("/")
  }


  return (
    <div className='login'>
      <h1 className='title'> USER REGISTER</h1>
      <form className='form' onSubmit={handleRegister}>
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
        <div className="containerButtons">
          <div className='hoverButton'>
            <button className='loginButton' onClick={handleLogin}>Login</button>
          </div>
          <div className='hoverButton'>
            <button className='registerButton' type="onSubmit">Register</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage