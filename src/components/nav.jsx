import React from 'react';

const Nav = ({totalCount}) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">
                Navbar <span className="badge badge-pill badge-secondary">{totalCount}</span>
            </a>
        </nav>
     );
};
 
export default Nav;