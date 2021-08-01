
import React from 'react';
import './Header.css';


function Header() {
  return (
    <header className="Header">
			<nav>
				<ul className="nav"> 
					<li> <a href="/" className="nav-font">Home</a> </li>		
					<li> <a href="/projects" className="nav-font">Projects</a> </li>		
                    <li> <a href="/contact" className="nav-font">Contact</a> </li>			
				</ul>
			</nav>
		</header>
  );
}

export default Header;