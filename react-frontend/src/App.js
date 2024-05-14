import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import AddUser from "../users/AddUser";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>    //when only type "/" with localhost:3000 it goes to home page
            <Route exact path="/adduser" element={<AddUser/>}></Route> 
          </Routes>
          
      </Router>
      
       
    </div>
  );
}

export default App;
