import React, { Component,PropTypes } from 'react';

class SignupForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            conPassword: ''
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
       e.preventDefault();
       this.props.userSignUp(this.state)
    }
    render() {
        return (
            <form className="ui form" onSubmit={this.onSubmit}>
                <div className="field">
                    <label>Username</label>
                    <input type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        placeholder="Username" />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" 
                           value={this.state.email}
                           onChange={this.onChange}
                           name="email"
                           placeholder="Email" />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" 
                           value={this.state.password}
                           onChange={this.onChange}
                           name="password"
                           placeholder="Password" />
                </div>
                <div className="field">
                    <label>Confirm Password</label>
                    <input type="password" 
                           value={this.state.conPassword}
                           onChange={this.onChange}
                           name="conPassword"
                           placeholder="Confirm Password" />
                </div>
                <button className="ui button primary" type="submit">Sign Up</button>
            </form>
        )
    }
}
SignupForm.propTyps = {
    userSignUp: PropTypes.func.isRequired
}
export default SignupForm;