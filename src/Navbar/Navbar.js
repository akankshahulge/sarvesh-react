import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
  <>
 <header>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
       <Link to="/AddExp" >Add Expense</Link> 
      </li>
      <li>
        <Link to="/ShowExp" >Show Expense</Link>
      </li>
    </ul>
  </nav>
 </header>
  </>
  )
}

export default Navbar;