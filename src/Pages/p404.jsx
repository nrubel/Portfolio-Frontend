import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/images/404.jpg';

const style = {
    backgroundImage: 'url(' + Image + ')'
}

const p404 = () => {
    return (
        <section className="page-projects row mx-0 top-left-line bottom-left-line top-left-focus">
            <div className="container">
                <div className="row content-404 flex-column" style={style}>
                    <h2 className="error-no">404</h2>
                    <h2 className="error-texts">oops...something has gone terribly wrong</h2>
                    <div className="row"><Link to={'/'} className="go-home">BACK TO HOME</Link></div>
                </div>
            </div>
        </section>
    )
}

export default p404;