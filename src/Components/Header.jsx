import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <header className="page-header mt-0 row mx-0 d-xs-none" id="nav-holder">
            <div className="container">
                <div className="row mx-0 justify-content-center justify-content-md-between align-items-center flex-column flex-md-row">
                    <a href="/" className="brand">Nasir Uddin<small>Front-End Developer</small></a>
                    <ul className="nav nav-pills site-nav site-pages">
                        <li className="nav-item"><Link to={'/'} className={'nav-link'}>Home</Link></li>
                        <li className="nav-item"><Link to={'/works'} className={'nav-link'}>Works</Link></li>
                        {/*<li className="nav-item"><Link to={'/about'} className={'nav-link'}>About Me</Link></li>*/}
                        {/*<li className="nav-item"><Link to={'/journal'} className={'nav-link'}>Journal</Link></li>*/}
                        <li className="nav-item"><HashLink smooth to={'/#contact'} className={'nav-link'}>Contact Me</HashLink></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;