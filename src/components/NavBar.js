import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className='navbar'>
      <ul>
        <li><NavLink exact to='/' activeClassName='active'>Home</NavLink></li>
        <li><NavLink exact to='/movies' activeClassName='active'>Movies</NavLink></li>
        <li><NavLink exact to='/directors' activeClassName='active'>Directors</NavLink></li>
        <li><NavLink exact to='/actors' activeClassName='active'>Actors</NavLink></li>
      </ul>
    </div>
  );
}

export default NavBar;
