import React, { Component } from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { userLogin } from '../../actions/loginActions'
import {addFlashMsg} from '../../actions/flashMsgs'

class LoginPage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to our community!</h1>
                <LoginForm userLogin={this.props.userLogin} addFlashMsg={this.props.addFlashMsg}/>
            </div>
        )
    }
}

export default connect(null, {addFlashMsg, userLogin })(LoginPage)