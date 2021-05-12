import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  // set useSate
  const [click, setClick] = useState(false);

  // function handleClick
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          {/* logo */}
          <Link to='/' className='navbar-logo'>
            Travel <i class='fas fa-route'></i>
          </Link>

          {/* menu icon function toggle */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
