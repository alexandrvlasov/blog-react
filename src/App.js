import React from 'react';
import { Route } from 'react-router-dom'

import HomePage from './scenes/client/HomePage'
// import AdminPage from './scenes/admin/components/HomeAdmin'


const App = () => (
    <div id='page'>

        <Route exact path='/' component={HomePage} />
        {/* <Route exact path='/admin' component={HomeAdmin} /> */}
    </div>
)

export default App;