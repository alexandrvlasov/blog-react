import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'

import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            match: this.props.match,
            loading: true
        }
    }

    async componentDidMount() {
        await axios.get('http://localhost:3000/api/v1/posts').then(response => {
            this.setState({
                posts: response.data.posts,
                loading: false
            })
        }).catch(function (error) {
            console.log(error)
        })
        console.log(this.state.posts)
        console.log(this.state.match)
    }

    render() {
        if (this.state.loading) {
            return <div className="colorlib-loader"></div>
        }
        return (
            <>
                <Header /> 

                {/* <Slider dataImg={this.state.sliders} /> */}
                {/* <div id="colorlib-container">
                    <div className="container">
                        <div className="row row-pb-md">
                            {this.state.posts.map(post => <Post key={post._id} postData={post} />)}
                        </div>
                    </div>
                </div> */}

                <Route exact path='/' component={Home} />
                <Route path='/contact' render={() => <div>Contact</div>} />
                {/* <Route path='/post/:id' render={({ match }) => <div><SinglePost id={match.params.id} /></div>} /> */}

                <Footer />

            </>
        )
    }
}

export default HomePage