import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../../services/api";
import "../../styles/styles.css"
import img1 from '../../assets/background1.png'





const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const login = async () => {

    const url = "/sessions"
    const options = {
      email: email,
      password: password
    }
    await api.post(url, options)
      .then(
        async response => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          navigate('/home');

        }
      )
      .catch(function (error) {
        if (error.response) {
          alert(error.response.data.error);
          // setLogged(true);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }

      });
  }

  const handleLogin = (e) => {
    e.preventDefault();

    login();
  }

  const handleRegister = () => {
    navigate("/register")
  }

  return (
    <div className='container'>
      <img src={img1} alt='imagem ilustrativa' />
      <div className='loginContainer'>
        <p className='singUpText'>Not a member? <span onClick={handleRegister}>Sing up now</span></p>
        <h1 className='title'> LOGIN SYSTEM</h1>
        <form className='form' onSubmit={handleLogin}>
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
              <button className='loginButton' type='onSubmit'>Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;