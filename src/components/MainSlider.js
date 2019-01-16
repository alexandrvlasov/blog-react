import React, { Component } from 'react'

class Slider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imgOne: 'url(images/img_bg_1.jpg)',
            imgTwo: 'url(images/img_bg_2.jpg)',
            imgThree: 'url(images/img_bg_3.jpg)',
            imgFour: 'url(images/img_bg_4.jpg)'
        }
    }

    async componentDidMount() {
        await this.setState({
            imgOne: this.props.dataImg.imgOne,
            imgTwo: this.props.dataImg.imgTwo
        })
    }

    style = {
        one: {backgroundImage: `url(${window.location.origin}/images/img_bg_1.jpg)`},
        two: {backgroundImage: `url(${window.location.origin}/images/img_bg_2.jpg)`},
        three: {backgroundImage: `url(${window.location.origin}/images/img_bg_3.jpg)`},
        four: {backgroundImage: `url(${window.location.origin}/images/img_bg_4.jpg)`}
    }

    componentWillUnmount() {
        
    }

    render() {
        return (
            <div id="colorlib-hero">
                <div className="flexslider">
                    <ul className="slides">
                        <li style={this.style.one}>
                            <div className="overlay"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-md-pull-3 col-sm-12 col-xs-12 col-md-offset-3 slider-text">
                                        <div className="slider-text-inner">
                                            <div className="desc">
                                                <p className="meta">
                                                    <span className="cat"><a href="/">Events</a></span>
                                                    <span className="date">20 March 2018</span>
                                                    <span className="pos">By <a href="/">Rich</a></span>
                                                </p>
                                                <h1>How a website designer began customizing and designing</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li style={this.style.two}>
                            <div className="overlay"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-md-pull-3 col-sm-12 col-xs-12 col-md-offset-3 slider-text">
                                        <div className="slider-text-inner">
                                            <div className="desc">
                                                <p className="meta">
                                                    <span className="cat"><a href="/">Events</a></span>
                                                    <span className="date">20 March 2018</span>
                                                    <span className="pos">By <a href="/">Rich</a></span>
                                                </p>
                                                <h1>How a website designer began customizing and designing</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li style={this.style.three}>
                            <div className="overlay"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-md-pull-3 col-sm-12 col-xs-12 col-md-offset-3 slider-text">
                                        <div className="slider-text-inner">
                                            <div className="desc">
                                                <p className="meta">
                                                    <span className="cat"><a href="/">Events</a></span>
                                                    <span className="date">20 March 2018</span>
                                                    <span className="pos">By <a href="/">Rich</a></span>
                                                </p>
                                                <h1>How a website designer began customizing and designing</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li style={this.style.four}>
                            <div className="overlay"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-md-pull-3 col-sm-12 col-xs-12 col-md-offset-3 slider-text">
                                        <div className="slider-text-inner">
                                            <div className="desc">
                                                <p className="meta">
                                                    <span className="cat"><a href="/">Events</a></span>
                                                    <span className="date">20 March 2018</span>
                                                    <span className="pos">By <a href="/">Rich</a></span>
                                                </p>
                                                <h1>Top 5 Places To Start Your Vacation This Summer</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Slider