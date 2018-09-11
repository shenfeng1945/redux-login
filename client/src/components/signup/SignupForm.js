import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Loading from '../Loading'

class SignupForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            conPassword: '',
            errors: {},
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
       e.preventDefault();
       this.props.userSignup(this.state).then(
           ()=>{},
           ({response})=>{this.setState({errors: response.data})}
       )
    }
    render() {
        const {errors} = this.state;
        return (
            <form className="ui form" onSubmit={this.onSubmit}>
                <div className={classNames('field',{error:!!errors.username})}>
                    <label>Username</label>
                    <input type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        placeholder="Username" />
                    {errors.username && <div style={{color:'red'}}>{errors.username}</div>}
                </div>
                <div className={classNames('field',{error:!!errors.email})}>
                    <label>Email</label>
                    <input type="email" 
                           value={this.state.email}
                           onChange={this.onChange}
                           name="email"
                           placeholder="Email" />
                    {errors.email && <div style={{color:'red'}}>{errors.email}</div>}
                </div>
                <div className={classNames('field',{error:!!errors.password})}>
                    <label>Password</label>
                    <input type="password" 
                           value={this.state.password}
                           onChange={this.onChange}
                           name="password"
                           placeholder="Password" />
                    {errors.password && <div style={{color:'red'}}>{errors.password}</div>}
                </div>
                <div className={classNames('field',{error:!!errors.conPassword})}>
                    <label>Confirm Password</label>
                    <input type="password" 
                           value={this.state.conPassword}
                           onChange={this.onChange}
                           name="conPassword"
                           className="error"
                           placeholder="Confirm Password" />
                    {errors.conPassword && <div style={{color:'red'}}>{errors.conPassword}</div>}
                </div>
                <button className="ui button primary" type="submit">Sign Up</button>
                <Loading />
            </form>
        )
    }
}
SignupForm.propTyps = {
    userSignUp: PropTypes.func.isRequired
}
export default SignupForm;