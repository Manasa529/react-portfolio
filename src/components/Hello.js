import React from 'react'

const Hello = () => {
  return (
    // <div>
      
    // </div>
    //React.createElement('div',null,'Hello World')
    React.createElement('div',null,
        React.createElement('hi',null,'Hello World')
    )
  )
}

export default Hello
