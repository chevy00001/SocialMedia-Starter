import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="webname">
                <h1>Chevy Media</h1>
                <h6>Explore Amazing Things</h6>
            </div>
        </div>
        <h1>Form</h1>
    </div>
  )
}

function SignUp(){
    
}

export default Auth