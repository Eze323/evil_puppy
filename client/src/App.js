import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Detail from './components/Detail/Detail.jsx';
import LandingPage from './components/LandingPage/LandingPage';

import './App.css';
import Nav from './components/Nav/Nav.jsx';

function App() {

  // eslint-disable-next-line
  const navigate =useNavigate();
  // eslint-disable-next-line
  const location = useLocation();

  return (
    
    <div className="App">
      {location.pathname!=='/'&& <Nav /*//onSearch={onSearch}*//>}
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/detail/:id' element={<Detail/>} />
      </Routes>


    </div>
    );
}

export default App;
