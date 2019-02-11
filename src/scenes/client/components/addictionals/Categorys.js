import React from 'react'

const Categorys = ({
    ...props
}) => (
    <div className="side">
        <h2 className="sidebar-heading">Categories</h2>
        <div>
            <ul className="category">
                <li><a href="/"><i className="icon-check"></i> Home</a></li>
                <li><a href="/"><i className="icon-check"></i> About Me</a></li>
                <li><a href="/"><i className="icon-check"></i> Blog</a></li>
                <li><a href="/"><i className="icon-check"></i> Travel</a></li>
                <li><a href="/"><i className="icon-check"></i> Lifestyle</a></li>
                <li><a href="/"><i className="icon-check"></i> Fashion</a></li>
                <li><a href="/"><i className="icon-check"></i> Health</a></li>
            </ul>
        </div>
    </div>
)

export default Categorys