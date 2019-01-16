import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Header from './components/Header'
import Main from './components/Main'
import Contact from './components/Contact'
import SinglePost from './components/SinglePost'
import Footer from './components/Footer'

import HomeAdmin from './scenes/admin/components/HomeAdmin'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true
        }
    }

    componentWillMount() {
        this.setState({
            loading: false
        })
    }

    render() {
        // { this.state.loading ? (<div class="colorlib-loader"></div>) : (<div></div>) }
        return (
            <div id='page'>
                {/* <Header /> */}

                <Route exact path='/' component={Main} />
                <Route path='/contact' component={Contact} />
                <Route path='/post/:id' render={({ match }) => <div><SinglePost id={match.params.id} /></div>} />
                
                <Route exact path='/admin' component={HomeAdmin} />

                {/* <Footer /> */}
            </div>
        )
    }
}

export default App;