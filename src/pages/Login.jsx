import React from 'react'
import Template from '../components/Template'
// import loginImg from "../login.png"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Discover the Joy of Seamless Shopping"
      desc1="Elevate Your Shopping Experience."
      desc2="Every Purchase Tells a Unique Story"
      
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login
