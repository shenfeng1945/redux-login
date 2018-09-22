import React,{Component} from 'react'
import {NavLink } from "react-router-dom";

class NavigationBar extends Component {
    render(){
        return (
            <div className="ui three item menu">
                <NavLink exact activeClassName="active" to="/login" className="item">ReduxLogin</NavLink>
                <NavLink exact activeClassName="active" to="/signup" className="item">Sign Up</NavLink>
                <NavLink activeClassName="active" to="/" className="item">New Game</NavLink>
            </div>
        )
    }
}

export default NavigationBar;