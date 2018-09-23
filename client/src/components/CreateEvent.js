import React, { Component } from 'react'
import {createEvent} from '../actions/eventAction'
import {connect} from 'react-redux'

class CreateEvents extends Component {
  constructor(props){
      super(props)
      this.state = {
          title: ''
      }
  }
  onSubmit = (e) => {
      e.preventDefault();
      if(this.state.title !== ''){
         this.props.createEvent({title:this.state.title.trim()}).then(
             ()=> {console.log('object')},
             () => {
                 console.log(this.props.history.push('/login'))
             }
         )
             
      }
  }
  onChange = (e) => {
      this.setState({title: e.target.value})
  }
  render() {
    return (
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
             <input type="text" 
                value={this.state.title}
                onChange={this.onChange}
                placeholder="create a title"/>
          </div>
          <button className="ui button primary">Create</button>
        </form>
    )
  }
}
export default connect(null,{createEvent})(CreateEvents)
