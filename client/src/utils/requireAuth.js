import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addFlashMsg} from '../actions/flashMsgs'

export default function (ComposeComponent) {
    class Authenticate extends Component {
        componentWillMount(){
           if(!this.props.isAuthorization){
              this.props.addFlashMsg({
                  type: 'error',
                  text: 'Your need to Login'
              })
              this.props.history.push('/login')
           }
        }
        componentWillUpdate(nextProps){
            if(!nextProps.isAuthorization){
              this.props.history.push('/login')
            }
        }
        render() {
            return (
                <div>
                   <ComposeComponent {...this.props}/>
                </div>
            )
        }
    }
    const mapStateToProps = (state) => {
        return {
            isAuthorization: state.auth.isAuthorization
        }
    }
    return connect(mapStateToProps,{addFlashMsg})(Authenticate);
}