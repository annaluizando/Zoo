import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"

const NavBar = () => {
    return ( 
        <header>
            <button className='ButtonNav'>
                <Link to='/' className="pages">Home</Link>
            </button>

            <button className='ButtonNav'>
                <Link to='/animals' className="pages">Animals</Link>
            </button>

            <button className='ButtonNav'>
                <Link to='/gallery' className="pages">Gallery</Link>
            </button>
        </header>
     );
}
 
export default NavBar;