import React, { Component } from 'react';
import SignupForm from './SignupForm'
import {connect} from 'react-redux'
import {userSignUp} from ''
class SignupPage extends Component {
    render() {
        return (
            <div>
                <h1>Join our community!</h1>
                <SignupForm></SignupForm>
            </div>
        );
    }
}

export default connect(null,{userSignUp})(SignupPage);