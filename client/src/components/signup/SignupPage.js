import React, { Component} from 'react';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm'
import {connect} from 'react-redux'
import {userSignup} from '../../actions/signupActions'
class SignupPage extends Component {
   static propTypes = {
    userSignup: PropTypes.func.isRequired
   }
    render() {
        return (
            <div>
                <h1>Join our community!</h1>
                <SignupForm userSignup={this.props.userSignup}></SignupForm>
            </div>
        );
    }
}

export default connect(null,{userSignup})(SignupPage);