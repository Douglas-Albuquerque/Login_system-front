import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';

export const PrivateRoute = ({ children }) => {

  const isAuthenticated = localStorage.getItem("token");

  if (isAuthenticated == false || isAuthenticated == "" || isAuthenticated == null) {
    return <Navigate to="/" />
  } else {
    return children
  }
}
const AppRoutes = () => {

  return (
    <Router>
      <Routes>
        <Route path='/register' element={<RegisterPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/Home" element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
};

export default AppRoutes;