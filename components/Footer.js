import React from 'react'
import Image from 'next/image'
import style from '/styles/Footer.css'
import Translate from 'components/Translate.js'

function Footer(props) {
  return (
    <div className="footerBox">
        <div id="todum"><a href="#" id='todumLink'>{props.Read}</a></div>
        <div className="footerLink">
            <p className='call' >Questions? Call <a href="tel:000-800-919-1694" id='phone'>000-800-919-1694</a></p>
            <div className='allLink' >
                <a href="#" className='ft' >FAQ</a>
                <a href="#" className='ft' >Help Centre</a>
                <a href="#" className='ft' >Account</a>
                <a href="#" className='ft' >Media Centre</a>
                <a href="#" className='ft' >Investor Relations</a>
                <a href="#" className='ft' >Jobs</a>
                <a href="#" className='ft' >Ways to Watch</a>
                <a href="#" className='ft' >Terms of Use</a>
                <a href="#" className='ft' >Privacy</a>
                <a href="#" className='ft' >Cookie Preferences</a>
                <a href="#" className='ft' >Corporate Information</a>
                <a href="#" className='ft' >Contact Us</a>
                <a href="#" className='ft' >Speed Test</a>
                <a href="#" className='ft' >Legal Notices</a>
                <a href="#" className='ft' >Only on Netflix</a>

            </div>
            <Translate/>
            <p className='netIndia' >Netflix India</p>
        </div>
        
    </div>
  )
}

export default Footer