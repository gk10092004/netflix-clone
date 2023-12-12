import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from 'styles/GPage.css'

const GHeader = () => {
    return (
        <div id='genreHeadMain'>
            <div id="logo">
                <Image src='/netflix-logo.png' width={100} height={1} id='Glogo' alt="netflix-logo" />
                <Image src="/nlogo.png" alt="" width={100} height={100} id='Gnlogo' />    
            </div>
            <div className="genreHeaderbtn">
                <div id="btnText">UNLIMITED TV SHOWS & MOVIES</div>
                <Link href='/' className='GloginLink'><div className="Glogin jnred">JOIN NOW</div></Link>
                <Link href='/login' className='GloginLink'><div className="Glogin">Sign In</div></Link>
            </div>
        </div>
    )
}

export default GHeader