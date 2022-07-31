import './App.css';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import {Routes,Route, Link, useNavigate } from 'react-router-dom';
import Home from './components/homepage/homepage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouseUser,faGraduationCap,faAddressBook,faUser } from '@fortawesome/free-solid-svg-icons'
import Sarees from './components/individual/sarees'
import Kids from './components/individual/kids';
import Womenskurtas from './components/individual/womenskurtas';
import Menskurta from './components/individual/menskurta';
import Boys from './components/individual/boys';
import Menscasualwear from './components/individual/menscasualwear';
import Hashtags from './components/admin/hashtags';
import Data from './components/admin/data';
import Userhashtags from './components/admin/userhashtags';

function App() {
  let username=localStorage.getItem("username")
  let navigate=useNavigate()
  function logout(){
    localStorage.removeItem("username")
    navigate("/login")
  }
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg w-sm-75 mx-auto">
      <div className="container-fluid">
      <Link className="nav-link active h1 text-white nav" to="/"><FontAwesomeIcon icon={faHouseUser} /> Home</Link>
      <div className="d-flex">
      
      <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        {username==null?
        <ul className="navbar-nav ms-lg-auto me-3">
          <li className="nav-item">
            <Link className="nav-link active nav" to="/signup"><FontAwesomeIcon icon={faAddressBook} /> Sign up</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link active nav" to="/login"><FontAwesomeIcon icon={faUser} /> Login</Link>
          </li>
        </ul>:
        <ul className="navbar-nav ms-lg-auto me-3">
          <li className="nav-item">
              <Link className="nav-link active nav" to=""><FontAwesomeIcon icon={faUser} /> Hello! {username} </Link>
          </li>
          <li className="nav-item">
              <a className="nav-link active nav" onClick={logout} ><FontAwesomeIcon icon={faUser} /> Logout </a>
          </li>
        </ul>
        }
      </div>
      </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/sarees" element={<Sarees />} />
        <Route path="/womenskurtas" element={<Womenskurtas />} />
        <Route path="/girls" element={<Kids />} />
        <Route path="/menskurta" element={<Menskurta />} />
        <Route path="/boys" element={<Boys />} />
        <Route path="/menscasualwear" element={<Menscasualwear />} />
        <Route path="/adminhashtags" element={<Hashtags />} />
        <Route path="/userhashtags" element={<Userhashtags />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </div>
  );
}

export default App;
