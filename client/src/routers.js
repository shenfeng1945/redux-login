import React from 'react'
import {Route} from 'react-router-dom'
import App from './components/App'
import SignupPage from './components/signup/SignupPage'

export default (
    <div className="contain">
      <Route path="/" exact component={App}></Route>
      <Route path="/signup" component={SignupPage}></Route>
    </div>
)