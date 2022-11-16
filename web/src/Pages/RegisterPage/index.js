import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../LoginPage/styles.css"
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

          console.log("Usuário Cadastrado", response.data);

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



  return (
    <div className='login'>
      <h1 className='title'> Registro de Usuário</h1>
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
        <div className='enterButton'>
          <button type="onSubmit">Register</button>
        </div>
        {/* <div className='enterButton'>
          <button onClick={handleLogin}>Login</button>
        </div> */}
      </form>
    </div>
  );
}

export default RegisterPage