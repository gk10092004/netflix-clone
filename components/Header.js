import React from 'react'
import Link from 'next/link'
import style from '/styles/Header.css'
import Image from 'next/image'
import Translate from 'components/Translate.js'

function Header() {
  return (
    <div id='header'>
        <div id="logo"><Image src='/netflix-logo.png' width={100} height={1} id='nlogo' alt="netflix-logo" /></div>
        <div className="headerbtn">
            <div className='mainPageTrans'><Translate  /></div>
            <Link href='/login' id='loginLink'><div id="login">Sign In</div></Link>
            
        </div>
    </div>
  )
}

export default Header;