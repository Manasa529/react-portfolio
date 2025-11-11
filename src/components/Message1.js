import React, { Component } from 'react'

class Message1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {message:'Welcome to my new home!!'}
         
      }
      changeText(){
        this.setState({message:'Explore every room'})

      }  
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeText()}>Click button</button>
        
      </div>
    )
  }
}

export default Message1
