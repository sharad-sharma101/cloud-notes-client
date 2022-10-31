import React  from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Signup from './components/Signup';
import Login from './components/Login';
//import { useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
//import Footer from './components/Footer';
// import Alert from './components/Alert';
function App() {
  // let [alert , setalert] = useState(null);
  // const showAlert = (message , type)=>{
  //   setalert({
  //     msg : message,
  //     type: type
  //   })
  //   setTimeout(() => {
  //     setalert(null);
  //   }, 1500);
  // }
  return (
   <>
   <NoteState>
   <Router>
   <Navbar/>
   {/* <Alert alert={alert} /> */}
   <div className="container">
          <Routes>
            <Route exact path="/" element=
            {<Home  />}>
            </Route>
            <Route exact path="/about" element={<About  />}>
            </Route>
            <Route exact path="/login" element={<Login  />}>
            </Route>
            <Route exact path="/signup" element={<Signup/>}>
            </Route>
          </Routes>
    </div>
   </Router>
   </NoteState>
   </>
  );
}


export default App;