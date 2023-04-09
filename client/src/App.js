import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import LandingPage from './components/LandingPage/LandingPage';

import './App.css';

function App() {

  // eslint-disable-next-line
  const navigate =useNavigate();
  // eslint-disable-next-line
  const location = useLocation();

  return (
    
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>


    </div>
    );
}

export default App;
