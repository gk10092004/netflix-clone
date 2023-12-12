import React from 'react'
import Image from 'next/image'
import style from '/styles/Login.css'
import LoginFooter from '../../../components/LoginFooter'
import NefHeader from '../../../components/NefHeader'


function Home() {
  return (
    <div className="loginPage">
      <Image src="/background.jpg" width={1000} height={500} objectFit='cover' alt="bg" className="bgl" />
      <div id='netf'><NefHeader/></div>
      <div id='demo'>
        <div id='loginArea'>
          <div id='innerLogin'>
          <h1 id="sIn">Sign In</h1>
          <input type="email/number" placeholder='Email or phone number' className='inData' />
          <input type="password" placeholder='Password' className='inData'  />
          <button id='signInBtn'>Sign In</button>
          <div id="rNeed">
            <div><input type="checkbox" id='checkB'/>Remember me</div>
            <a href="#" id='nHelp'>Need help</a>
          </div>
          <p id="signUpNowText">New to Netflix? <a href="#" id='signUpNow'>Sign up now</a> </p>
          <p id="learnMoreText">This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" id='learnMore'>Learn more</a> </p>
          </div>
        </div>
        <div id='lfoot'>
          <LoginFooter/>
        </div>
      </div>
    </div>
  )
}

export default Home