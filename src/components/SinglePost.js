import React, { Component } from 'react'
import axios from 'axios'

import Breadcrumbs from './Breadcrumbs'
import Search from './addictionals/Search'
// import Comments from './addictionals/Comments'
// import Categorys from './addictionals/Categorys'

class SinglePost extends Component {
	constructor(props) {
		super(props)

		this.state = {
			post: {}
		}
	}

	async componentDidMount() {
		await axios.get(`http://localhost:3000/api/v1/post/${this.props.id}`).then(response => {
			this.setState({
				post: response.data.post
			})
			
		}).catch(function (error) {
			console.log(error)
		})
	}

	render() {
		const { title, images } = this.state.post
		return (
			<>
				<Breadcrumbs title={title} />

				<div id="colorlib-container">
					<div className="container">
						<div className="row">
							<div className="col-md-9 content">
								<div className="row row-pb-lg">
									<div className="col-md-12">
										<div className="blog-entry">
											<div className="blog-img blog-detail">
												<img src={images} className="img-responsive" alt="html5 bootstrap template" />
											</div>
											<div className="desc">
												<p className="meta">
													<span className="cat"><a href="/">Events</a></span>
													<span className="date">20 March 2018 { this.state.post.dateCreate }</span>
													<span className="pos">By <a href="/">Rich</a></span>
												</p>
												<h2><a href="blog.html">{title}</a></h2>
												<p dangerouslySetInnerHTML={{__html: this.state.post.bodyText}}></p>
												<blockquote>
													A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
										</blockquote>
												<p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
												<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. </p>
											</div>
										</div>
									</div>
								</div>
								{/* <Comments count={3} /> */}
							</div>
							<div className="col-md-3">
								<div className="sidebar">
									<Search />
									{/* <Categorys /> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default SinglePost