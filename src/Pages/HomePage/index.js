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
    <div className='homeContainer'>
      <div className="homeBox">
        <h1 className='title'>Bem vindo: </h1>
        <h1 className='title'>{userData.name} {userData.lastName}</h1>
        <div className="hoverButton">
          <button className="logoutButton" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  )
};

export default HomePage;