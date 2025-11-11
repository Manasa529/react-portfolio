import React, { Component } from 'react'

class Message extends Component {
    //rconst---
    constructor(props) {
      super(props)
      this.state={message:'Welcome Visitor !'}   
      }
      changeMsg(){
        this.setState({message:'Welcome manasa'})
      }
    
    
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeMsg()}>Click</button>
        </div>
    )
  }
}

export default Message
