import React from 'react'
import './Nav.css'

function Nav() {
    return (
        <div className='stickyNav'>
            <nav className="navbar navbar-default navbar-expand-md bg-light navbar-light ">
                <a href="/" className="navbar-brand">
                    FX Recipe
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        <a href="/" className="nav-item nav-link">Home</a>
                        <a href="/" className="nav-item nav-link">About</a>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Nav
