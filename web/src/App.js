import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <div className="App">
      <header className='head'>
        <nav>
          <h1 className='textHead '>Oliveira Trade</h1>
          <Link to="/">Login</Link>
          <Link to="/home">Home</Link>
        </nav>
        <hr />
      </header>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
