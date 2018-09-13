import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import FlashMsg from './FlashMsg'
import {deleteFlashMsg} from '../../actions/flashMsgs'

class FlashMsgList extends Component {
  static propTypes = {
     messages: PropTypes.array.isRequired,
     deleteFlashMsg: PropTypes.func.isRequired
  }

  render() {
    const {messages} = this.props
    return (
      <div>
          {messages.map(item=>(
             <FlashMsg deleteFlashMsg={this.props.deleteFlashMsg} key={item.id} message={item}/>
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
export default connect(mapStateToProps,{deleteFlashMsg})(FlashMsgList)
