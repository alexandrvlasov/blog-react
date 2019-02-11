import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav className="colorlib-nav" role="navigation">
        <div className="top-menu">
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-sm-3">
                        <div id="colorlib-logo"><Link to="/"><span style={{ color: 'red' }}>ANN</span><span style={{ color: 'pink' }}>IN</span><span style={{ color: 'orange' }}>SPAIN</span></Link></div>
                    </div>
                    <div className="col-xs-2 col-sm-9 text-right menu-1">
                        <ul>
                            <li className="active"><Link to="/">Home</Link></li>
                            <li><Link to="/post">Blog</Link></li>
                            {/* <li><Link to="/">Event</Link></li> */}
                            {/* <li><Link to="/">Travel</Link></li> */}
                            <li><Link to="/about">About Me</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
)

export default Header