import React, { Component } from 'react'

import Breadcrumbs from './Breadcrumbs'

class Contact extends Component {
    render() {
        return (
            <React.Fragment>

                <Breadcrumbs title={'Contact us'} />

                <div id="colorlib-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="heading-2">Contact Information</h2>
                                <div className="row contact-info-wrap row-pb-lg">
                                    <div className="col-md-3">
                                        <p><span><i className="icon-location-2"></i></span> 198 West 21th Street, <br /> Suite 721 New York NY 10016</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><span><i className="icon-phone3"></i></span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><span><i className="icon-paperplane"></i></span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><span><i className="icon-globe"></i></span> <a href="/">yourwebsite.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Contact