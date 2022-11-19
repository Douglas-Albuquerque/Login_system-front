import { useNavigate } from 'react-router-dom';
import "../../styles/styles.css"


const HomePage = () => {

  const navigate = useNavigate();
  const getUser = localStorage.getItem("user");


  const userData = JSON.parse(getUser);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/")
  }

  return (
    <div className='login'>
      <div className="form">
        <h1 className='title'>Bem vindo: {userData.name} {userData.lastName}</h1>
        <button className="loginButton" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
};

export default HomePage;