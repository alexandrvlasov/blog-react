import React from 'react'

import Instagram from './addictionals/InstagramFooter'

const Footer = () => (
    <>
        <Instagram />

        <footer id="colorlib-footer" role="contentinfo">
			<div className="container">
				{/* <div className="row row-pb-md">
					<div className="col-md-3">
						<h2>Navigational</h2>
						<div>
							<ul className="colorlib-footer-links">
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
					<div className="col-md-3">
						<h2>Recent Post</h2>
						<div className="f-blog">
							<a href="blog.html" className="blog-img" style={{backgroundImage: 'url(images/blog-1.jpg)'}}>
							</a>
							<div className="desc">
								<h3><a href="blog.html">Be a designer</a></h3>
								<p className="admin"><span>25 March 2018</span></p>
							</div>
						</div>
						<div className="f-blog">
							<a href="blog.html" className="blog-img" style={{backgroundImage: 'url(images/blog-2.jpg)'}}>
							</a>
							<div className="desc">
								<h3><a href="blog.html">How to build website</a></h3>
								<p className="admin"><span>24 March 2018</span></p>
							</div>
						</div>
						<div className="f-blog">
							<a href="blog.html" className="blog-img" style={{backgroundImage: 'url(images/blog-3.jpg)'}}>
							</a>
							<div className="desc">
								<h3><a href="blog.html">Create website</a></h3>
								<p className="admin"><span>23 March 2018</span></p>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<h2>Archive</h2>
						<div>
							<ul className="colorlib-footer-links">
								<li><a href="/"><i className="icon-check"></i> February 2018</a></li>
								<li><a href="/"><i className="icon-check"></i> January 2018</a></li>
								<li><a href="/"><i className="icon-check"></i> December 2017</a></li>
								<li><a href="/"><i className="icon-check"></i> November 2017</a></li>
								<li><a href="/"><i className="icon-check"></i> October 2017</a></li>
								<li><a href="/"><i className="icon-check"></i> September 2017</a></li>
							</ul>
						</div>
					</div>
					<div className="col-md-3">
						<h2>Tags</h2>
						<p className="tags">
							<span><a href="/"><i className="icon-tag"></i> Modeling</a></span>
							<span><a href="/"><i className="icon-tag"></i> Fashion</a></span>
							<span><a href="/"><i className="icon-tag"></i> Life</a></span>
							<span><a href="/"><i className="icon-tag"></i> Blog</a></span>
							<span><a href="/"><i className="icon-tag"></i> Workout</a></span>
							<span><a href="/"><i className="icon-tag"></i> Vacation</a></span>
							<span><a href="/"><i className="icon-tag"></i> Travel</a></span>
							<span><a href="/"><i className="icon-tag"></i> Exercise</a></span>
							<span><a href="/"><i className="icon-tag"></i> Health</a></span>
							<span><a href="/"><i className="icon-tag"></i> News</a></span>
							<span><a href="/"><i className="icon-tag"></i> Model</a></span>
							<span><a href="/"><i className="icon-tag"></i> Women</a></span>
							<span><a href="/"><i className="icon-tag"></i> Animals</a></span>
							<span><a href="/"><i className="icon-tag"></i> Nature</a></span>
							<span><a href="/"><i className="icon-tag"></i> Art</a></span>
							<span><a href="/"><i className="icon-tag"></i> Sea</a></span>
							<span><a href="/"><i className="icon-tag"></i> Ocean</a></span>
							<span><a href="/"><i className="icon-tag"></i> Office</a></span>
							<span><a href="/"><i className="icon-tag"></i> Home</a></span>
						</p>
					</div>
				</div> */}
				<div className="row">
					<div className="col-md-12">
						<p>
							<small className="block">Copyright &copy;{new Date().getFullYear()} All rights reserved</small>
						</p>
					</div>
				</div>
			</div>
		</footer>
    </>
)

export default Footer