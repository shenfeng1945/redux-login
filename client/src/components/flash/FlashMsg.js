import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Close = styled.span`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;
`
export default class FlashMsg extends Component {
    static propTypes = {
        message: PropTypes.object.isRequired,
        deleteFlashMsg: PropTypes.func.isRequired
    }
    onClick = () =>{
        this.props.deleteFlashMsg(this.props.message.id)
    }
    render() {
        const { type, text } = this.props.message
        return (
            <div className={`ui message ${type}`} style={{ position: 'relative' }}>
                {text}
                <Close onClick={this.onClick}>
                    <span>&times;</span>
                </Close>
            </div>
        )
    }
}
