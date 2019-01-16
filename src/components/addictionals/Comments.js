import React from 'react'

const Comments = ({
    ...props
}) => (
    <div className="row row-pb-lg">
        <div className="col-md-12">
            <h2 className="heading-2">{props.count} Comments</h2>
            <div className="review">
                <div className="user-img" style={{backgroundImage: 'url(images/person1.jpg)'}}></div>
                <div className="desc">
                    <h4>
                        <span className="text-left">Jacob Webb</span>
                        <span className="text-right">24 March 2018</span>
                    </h4>
                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                    <p className="star">
                        <span className="text-left"><a href="/" className="reply"><i className="icon-reply"></i></a></span>
                    </p>
                </div>
            </div>
            <div className="review">
                <div className="user-img" style={{backgroundImage: 'url(images/person2.jpg)'}}></div>
                <div className="desc">
                    <h4>
                        <span className="text-left">Jacob Webb</span>
                        <span className="text-right">24 March 2018</span>
                    </h4>
                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                    <p className="star">
                        <span className="text-left"><a href="/" className="reply"><i className="icon-reply"></i></a></span>
                    </p>
                </div>
            </div>
            <div className="review">
                <div className="user-img" style={{backgroundImage: 'url(images/person3.jpg)'}}></div>
                <div className="desc">
                    <h4>
                        <span className="text-left">Jacob Webb</span>
                        <span className="text-right">24 March 2018</span>
                    </h4>
                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                    <p className="star">
                        <span className="text-left"><a href="/" className="reply"><i className="icon-reply"></i></a></span>
                    </p>
                </div>
            </div>
        </div>
    </div>
)

export default Comments