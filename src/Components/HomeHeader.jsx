import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <header className="page-header mt-0 row mx-0 d-xs-none" id="nav-holder">
            <div className="container">
                <ul className="nav nav-pills site-nav justify-content-center justify-content-md-start">
                    <li className="nav-item"><HashLink smooth to={'/#featured-projects'} className="nav-link">Portfolio</HashLink></li>
                    <li className="nav-item"><HashLink smooth to={'/#career'} className="nav-link">Career</HashLink></li>
                    <li className="nav-item"><HashLink smooth to={'/#contact'} className="nav-link">Contact</HashLink></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;