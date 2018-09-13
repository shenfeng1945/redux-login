import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import FlashMsg from './FlashMsg'

class FlashMsgList extends Component {
  static propTypes = {
     messages: PropTypes.array.isRequired
  }

  render() {
    const {messages} = this.props
    return (
      <div>
          {messages.map(item=>(
             <FlashMsg key={item.id} message={item}/>
          ))}
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
    return {
        messages: state.flashMsg,
    }
 }
export default connect(mapStateToProps,{})(FlashMsgList)
