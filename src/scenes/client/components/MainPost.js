import React from 'react'
import { Link } from 'react-router-dom'

const Post = (
    { ...props }
) => (
    <div className="col-md-4">
        <div className="blog-entry">
            <div className="blog-img">
                <Link to={`/post/${props.postData._id}`}>
                    <img src={props.postData.images} className="img-responsive" alt="html5 bootstrap template" />
                </Link>
            </div>
            <div className="desc">
                <div className="meta">
                    <span className="cat"><Link to="/">Events</Link></span>
                    <span className="date">20 March 2018</span>
                    <span className="pos">By <Link to="/">Rich</Link></span>
                </div>
                <h2><Link to={`/post/${props.postData._id}`}>{props.postData.title}</Link></h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary </p>
            </div>
        </div>
    </div>
)

export default Post