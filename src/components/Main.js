import React, { Component } from 'react'
import axios from 'axios'

import Slider from './MainSlider'
import Post from './MainPost'

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            sliders: {
                imgOne: 'url(images/img_bg_1.jpg)',
                imgTwo: 'url(images/img_bg_2.jpg)',
                imgThree: 'url(images/img_bg_3.jpg)',
                imgFour: 'url(images/img_bg_4.jpg)'
            }
        }
    }

    async componentDidMount() {
        await axios.get('http://localhost:3000/api/v1/posts').then(response => {
            this.setState({
                posts: response.data.posts
            })
        }).catch(function (error) {
            console.log(error)
        })
        console.log(this.state.posts)
    }

    render() {
        return (
            <React.Fragment>
                <Slider dataImg={this.state.sliders} />
                <div id="colorlib-container">
                    <div className="container">
                        <div className="row row-pb-md">
                            {this.state.posts.map(post => <Post key={post._id} postData={post} />)}
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Main