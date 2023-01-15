import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
// import Text from './components/Text';

import React, {useState,useRef} from 'react';


import {Routes,Route} from 'react-router-dom';
import Profile from './components/Profile';
import Education from './components/Education';
import Project from './components/Project'

import Contact from './components/Contact'


function App() {

 
  const [showMenu,setshowMenu] = useState(true);

  const nav = useRef("");
 
  const burgerMenu =()=>{

    if (window.innerWidth >750){
      return;
    }
    if(showMenu){
      nav.current.classList.add('slide');
      setshowMenu(false);
    }
    else{
      nav.current.classList.remove('slide');
      setshowMenu(true);
    }
    
    console.log(nav.current.classList);
  }

  


  return (
    <>
    <button className='burger' onClick={burgerMenu}>=</button>
    <div className='d-flex flex-row'> 
    
    <Navbar nav = {nav} burgerMenu={burgerMenu} />
    <Routes>
    <Route path='/' element={<Profile/>}/>
    <Route path='/education' element={<Education/>}/>
    <Route path='/project' element={<Project/>}/>
    <Route path='/contact' element={<Contact/>}/>
    
    </Routes>

    </div>
    </>
  );
}

export default App;
