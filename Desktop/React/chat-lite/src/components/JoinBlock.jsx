import React from 'react'
import './JoinBlock.css'
import socket from "../socket";

const JoinBlock = () => {
  return (
    <div className='SignIn__div'>
        <h1>Chat lite</h1>
        <div className="join-block">
            <input className="input__join" type="text" placeholder="Room ID"/>
            <input className="input__join" type="text" placeholder="Your name"/>
            <button className="button__join">Sign In</button>
      </div>
    </div>
  )
}

export default JoinBlock