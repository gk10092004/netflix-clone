import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from 'styles/Login.css'
import LoginFooter from '../../../components/LoginFooter'
// import GHeader from '../../../components/GHeader'


const page = () => {
  return (
    <div className="all">
    <div className='loginSt1'>
        <div id='loginSt1Head'>
            <div id="logo"><Image src='/netflix-logo.png' width={100} height={1} id='loginSt1logo' alt="netflix-logo" /></div>
            <div className="loginSt1Headerbtn">
                <Link href='/login' className='loginSt1Link'><div className="loginSt1Login">Sign In</div></Link>
            </div>
        </div>
        <div className='simpleContainer'>
            <form action="" className='loginSt1Form'>
                <p className='loginSt1Para'>STEP 1 OF 3</p>
                <h1 className='loginSt1Head'>Welcome back! <br />Joining Netflix is easy.</h1>
                <p className='loginSt1Para loginSt1Enter'>Enter your password and you'll be watching in no time.</p>
                <p className='loginSt1Para'>Email</p>
                <span className='loginSt1EmailData'>gaurav23270143@gmail.com</span>
                <input type="password" placeholder='Enter your password' className='loginSt1PassText' />
                <a href="#" className='loginSt1Pass'>Forgot your password?</a>
                <Link  className='loginSt1Next'  href="/loginSt2"><button id='step1Next'>Next</button></Link>
            </form>
        </div>
    </div>
    <div className="loginFooter">
        <LoginFooter/>
    </div>
    </div>

  )
  

}

export default page