import React from 'react'
// import signupImg from "../signup.png"
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Discover the Joy of Seamless Shopping - Where Every Click is a Step Closer to Your Desires"
      desc1="Elevate Your Shopping Experience."
      desc2="Every Purchase Tells a Unique Story"
      
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup
