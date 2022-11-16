import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';

const AppRoutes = () => {

  return (
    <Router>
      <Routes>
        <Route path='/register' element={<RegisterPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/Home" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;