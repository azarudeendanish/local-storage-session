import logo from './logo.svg';
import './App.css';
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
