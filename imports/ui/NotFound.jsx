import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div className="boxed-view">
            <div className="boxed-view__box">
                <h1>Page not found</h1>
                <h2>Hmmm, we're unable to find that page.</h2>
                <br/>
                <Link to="/" className="button button--link">Head Home</Link>
            </div>
        </div>        
    );
}