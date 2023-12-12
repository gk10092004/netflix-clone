import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from 'styles/Login.css'
import LoginFooter from '../../../components/LoginFooter'

const page = () => {
  return (
    <div className="all">
    <div className='loginSt1'>
        <div id='loginSt1Head'>
            <div id="logo"><Image src='/netflix-logo.png' width={100} height={1} id='loginSt1logo' alt="netflix-logo" /></div>
            <div className="loginSt1Headerbtn">
                {/* <div id="loginSt1btnText">UNLIMITED TV SHOWS & MOVIES</div> */}
                {/* <Link href='/' className='loginSt1Link'><div className="loginSt1Login ljnred">JOIN NOW</div></Link> */}
                <Link href='/login' className='loginSt1Link'><div className="loginSt1Login">Sign Out</div></Link>
            </div>
        </div>
        <div className='simpleContainer'>
            <div className="loginSt2Container">
                <div className="checkcirclebox"><Image src="/checkcircle.png" alt="" width={100} height={100} className='checkcircle' /></div>
                <p className='loginSt2Para'>STEP 2 OF 3</p>
                <h1 className='St2head'>Choose your plan.</h1>
                <ul className='st2ul'>
                    <li>
                        <Image src="/checkbox.png" alt="" width={100} height={100} className='checkbox' />
                        <span>No commitments, cancel anytime.</span>
                    </li>
                    <li>
                        <Image src="/checkbox.png" alt="" width={100} height={100} className='checkbox' />
                        <span>Everything on Netflix for one low price.</span>
                    </li>
                        
                    <li>
                        <Image src="/checkbox.png" alt="" width={100} height={100} className='checkbox' />
                        <span>No ads and no extra fees. Ever.</span>
                    </li>
                </ul>
                <Link href="#" className='loginSt1Next'><button id='step1Next'>Next</button></Link>
            </div>
        </div>
    </div>
    <div className="loginFooter">
        <LoginFooter/>
    </div>
    </div>
  )
}

export default page