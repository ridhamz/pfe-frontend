import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './navLinks.css';

const NavLinks = () => {
    const auth = useContext(AuthContext);
    return (
        <ul className='nav-links'>
            <li>
                <NavLink to='/' exact>HOME</NavLink>
            </li>
 
            {!auth.isLoggedIn && <li>
                 <NavLink to='/auth' exact>LOGIN</NavLink>
            </li>}
           
            {auth.isLoggedIn && <li>
                <NavLink to='/admin'>DASHBOARD</NavLink>
            </li>}
            {auth.isLoggedIn && <li>
                <button onClick={auth.logout}>LOGOUT</button>
            </li>}
        </ul>
    );
}

export default NavLinks;