import React from 'react';
import './styles/NavBar.css';

const NavBar = () => {
    return (
        <nav className='Nav'>
            <div className='NavSec1'>
                <div>
                    <a href="#" >
                        <img src="./images/menu.png" alt="menu" />
                    </a>
                </div>
                <div>
                    <input type="text" placeholder="Type here..." name="text" className="input"/>
                </div>
                <div>
                    <a href="#" >   
                        <img src="./images/logo.png" alt="Logo" />
                    </a>
                </div>
            </div>

            <div className='NavSec2'>
                <div>
                    <a href="#" className="btn"> Click Me</a>
                </div>
                <div>
                    <a href="#" >
                        <img src="./images/profil.png" alt="profil" /> 
                    </a>
                </div>
            </div>
        </nav>
    )
}



export default NavBar;
