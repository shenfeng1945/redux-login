import React, { Component } from 'react'
import PropTypes from 'prop-types'
import className from 'classnames'

class LoginForm extends Component {
  constructor(props){
      super(props)
      this.state = {
          users: '',
          password: '',
          errors: {},
          loading: false
      }
  }
  onSubmit = (e) => {
      e.preventDefault();
      let errors = {};
      const {users,password} = this.state; 
      if(!users){
         errors.users = '用户名或邮箱不可为空'
      }
      if(!password){
         errors.password = '邮箱不可为空'
      }
      this.setState({errors,loading:true})
      const isValid = Object.keys(errors).length===0
      if(isValid){
          this.props.userLogin({users,password}).then(
              ()=>{
                  this.props.addFlashMsg({
                      type: 'success',
                      text: 'Welcome back!'
                  })
                  this.context.router.history.push('/')
              },
              ({response}) => {
                  this.setState({errors: response.data,loading:false})
                }
          )
      }
  }
  onChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
  }
  render() {
    const {errors} = this.state;
    return (
      <form className="ui form" onSubmit={this.onSubmit}>
         <div className={className('field',{error: !!errors.users})}>
            <label>Username Or Email</label>
            <input type="text"
                name="users" 
                value={this.state.users}
                onChange={this.onChange}
                placeholder="Username or Email"
            />
            {errors.users && <div style={{color:'red'}}>{errors.users}</div>}
         </div>
         <div className={className('field',{error: !!errors.password})}>
            <label>Username</label>
            <input type="password"
                name="password" 
                value={this.state.password}
                onChange={this.onChange}
                placeholder="Password"
            />
            {errors.password && <div style={{color:'red'}}>{errors.password}</div>}
         </div>
         <button className="ui button primary" type="submit">Login</button>
      </form>
    )
  }
}
LoginForm.contextTypes = {
    router: PropTypes.object
}
export default LoginForm;
