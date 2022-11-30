import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from "../../services/api"

import "./style.css"
import img2 from '../../assets/background2.png'

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
    <div className="container">
      <img src={img2} alt="" />
      <div className='registerContainer'>
        <p className='singInText'>Already a menber? <span onClick={handleLogin}>Sing In</span></p>
        <h1 className='title'> USER REGISTER</h1>
        <form className='form' onSubmit={handleRegister}>
          <div className='formField'>
            <label htmlFor="name">First Name</label>
            <input
              type="name"
              name='name'
              className='fieldInput'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='formField'>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="lastName"
              name='lastName'
              className='fieldInput'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className='formField'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name='email'
              className='fieldInput'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='formField'>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name='password'
              className='fieldInput'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="containerButtons">
            <div className='hoverButton'>
              <button className='registerButton' type="onSubmit">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage