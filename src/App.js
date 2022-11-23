import logo from './logo.svg';
import './App.css';
import HeaderPart from './MyComponents/HeaderPart';
import Footer from './MyComponents/Footer';
import { GlobalStyle } from './styles/global';
import { Route, Routes } from 'react-router-dom';
import Login from './MyComponents/Login';
import SignUp from './MyComponents/SignUp';
import { Link } from "react-router-dom";
import Home from './MyComponents/Home';


function App() {
 
  return (
    <div className="App">
      <GlobalStyle/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/head' element={<HeaderPart/>}/>
       <Route path='/' element={<Login/>}/>
      </Routes>
      
      
      {/* <Footer/> */}
    </div>
  );
}

export default App;
