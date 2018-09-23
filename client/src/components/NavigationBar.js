import React,{Component} from 'react'
import {NavLink } from "react-router-dom";
import styled from 'styled-components'
import {connect} from 'react-redux'
import {logout} from '../actions/loginActions'

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const linkStyle = {
  'marginLeft': '10px'
}

class NavigationBar extends Component {
    logout = () => {
      this.props.logout()
    }
    render(){
        const requestAuth = (
            <div className="users">
               <NavLink exact activeClassName="active" to="/login" style={linkStyle}>Login</NavLink>
               <NavLink exact activeClassName="active" to="/signup" style={linkStyle}>Signup</NavLink>
            </div>
        )
        const haveAuth = (
            <div className="users">
              {this.props.user.username} 
              <a style={linkStyle} onClick={this.logout}>Logout</a>
            </div>
        )
        return (
            <NavBar>
                <h2>ReduxLogin</h2>
                <NavLink exact activeClassName="active" to="/create">Title</NavLink>
                {this.props.isAuthorization?haveAuth:requestAuth}
                {/* <NavLink exact activeClassName="active" to="/login" className="">ReduxLogin</NavLink>
                <NavLink exact activeClassName="active" to="/signup" className="">Sign Up</NavLink>
                <NavLink exact activeClassName="active" to="/" className="">New Game</NavLink> */}
            </NavBar>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        isAuthorization: state.auth.isAuthorization,
        user: state.auth.user
    }
}
export default connect(mapStateToProps,{logout})(NavigationBar);