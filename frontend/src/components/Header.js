import React from "react";
import { Link } from 'react-router-dom';
import './Header.css'


function Header() {
 return (
     <div>
         <header id="main-header">
            <div className="header-content">
            <Link to="/">
              <i className="fab fa-3x fa-instagram"> Instaclone</i>
            </Link>
             <Link to="/new">
            <i className="fas fa-3x fa-camera"></i>
             </Link>
            </div>
         </header>
     </div>
 )
}

export default Header;