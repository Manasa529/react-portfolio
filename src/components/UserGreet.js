import React, { Component } from 'react'

class UserGreet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {isLoggedIn:false
         
      }
    }
    
  render() {
    //1.if-else
//     if(this.state.isLoggedIn){
//         return <h3>Welcome ABC</h3>
//     }
//     else{
//         return <h3>Welcome Guest</h3>
//     }
    
//   }
   //2.Element variable
//    let res;
//    if(this.state.isLoggedIn){
//     res=<h3>Welcome ABC</h3>
//    }
//    else{
//     res=<h3>Welcome Guest</h3>
//    }
//    return res;
//3.Ternanry operator--
// 
//4.Short circuit operato4
return this.state.isLoggedIn && <h3>Welcome ABC!</h3>
 }
}
export default UserGreet
