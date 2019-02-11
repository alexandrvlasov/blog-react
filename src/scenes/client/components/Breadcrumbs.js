import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumbs = (
    props
) => (
    <aside id="colorlib-breadcrumbs">
        <div className="container">
            <div className="row">
                <div className="col-md-12 breadcrumbs text-center">
                    <h2>{props.title}</h2>
                    <p><span><Link to="/">Home</Link></span> / <span>Contact</span></p>
                </div>
            </div>
        </div>
    </aside>
)

export default Breadcrumbs