import React from 'react'
import spinner from '../images/spinner.gif';
const Loading=()=> {
    return (
      <div style={{textAlign:'center'}}>
        <img src={spinner} alt="Loading..." />
      </div>
    )
}

export default Loading