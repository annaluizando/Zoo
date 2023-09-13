import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"
import menuIcon from "../../assets/menu.svg";
import closeIcon from "../../assets/close.svg";
import logo from '../../assets/logob.png';


const NavBar = () => {
    const [menu, setMenu] = useState(true);

    return ( 
        <div className='NavBarContainer'>
            <div className='NavBarSmallerContainer'>

                <Link to = '/'><img src={logo} className="App-logo" alt="logo" /></Link>

                {menu ? (
                    <img src={closeIcon} className='closeIcon' alt='closeicon' onClick={() => setMenu(!menu)}></img>
                ):(
                    <img src={menuIcon} className='menuIcon' alt='menuicon' onClick={() => setMenu(!menu)}></img>

                )
                }

                {menu && 
                    <div className='menu'>
                        <button className='ButtonNav'>
                            <Link to='/' className="pages">Home</Link>
                        </button>

                        <button className='ButtonNav'>
                            <Link to='/animals' className="pages">Animals</Link>
                        </button>

                        <button className='ButtonNav'>
                            <Link to='/gallery' className="pages">Gallery</Link>
                        </button>
                    </div>
                }
            </div>
        </div>
     );
}
 
export default NavBar;