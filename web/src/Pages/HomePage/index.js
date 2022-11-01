import React, { useContext } from 'react'

import { AuthContext } from '../../contexts/auth';

const HomePage = () => {

  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }

  return (
    <div>
      <h1>Voce está Logado</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
};

export default HomePage;