import { useNavigate } from 'react-router-dom';


const HomePage = () => {

  const navigate = useNavigate();
  const getToken = localStorage.getItem("token");
  const getUser = localStorage.getItem("user");

  const userData = JSON.parse(getUser);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/")
  }

  return (
    <div className='login'>
      <h1>Bem vindo: {userData.name} {userData.lastName}</h1>
      <button className="logout" onClick={handleLogout}>Logout</button>
    </div>
  )
};

export default HomePage;