import React from 'react'

import { NavLink} from 'react-router-dom';


export default function Navbar({nav,burgerMenu}) {

  const active = {
    color: 'white'
  }
  const activa = (isActive)=>{

    if(isActive){
      return active;
    }
    else{
      return
    }
  }

  return (
    <>
    {/* <X.Provider value={"yo"}><App/></X.Provider> */}
    <nav className='my-nav d-flex flex-column' ref={nav}>
      <NavLink end={true}  onClick={burgerMenu}  to="/" style={({isActive})=> activa(isActive)}>My profile</NavLink>
      <NavLink end={true} onClick={burgerMenu} to="/education" style={({isActive})=> activa(isActive)}>Education</NavLink>
      <NavLink end={true}  onClick={burgerMenu} to="/project" style={({isActive})=> activa(isActive)}>Project</NavLink>
      <NavLink end={true}  onClick={burgerMenu} to="/contact" style={({isActive})=> activa(isActive)}>contact</NavLink>

    </nav>
    </>
  );
}



// Navbar.prototype = {
//   title: PropTypes.string.isRequired,
//   co: PropTypes.number.isRequired
// };

// Navbar.defaultProps = {
//   title: "set title",
//   co: "set co"
// }