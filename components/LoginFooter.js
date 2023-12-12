import React from 'react'
import style from '/styles/Login.css'
import LTranslate from 'components/Translate.js'

const LoginFooter = () => {
  return (
    <div className="lfLink">
            <p className='contact' >Questions? Call <a href="tel:000-800-919-1694" className='lft phone'>000-800-919-1694</a></p>
            <div className='lAllLink' >
                <a href="#" className='lft lft1' >FAQ</a>
                <a href="#" className='lft lft1' >Help Centre</a>
                <a href="#" className='lft lft1' >Terms of Use</a>
                <a href="#" className='lft lft1' >Privacy</a>
                <a href="#" className='lft lft1' >Cookie Preferences</a>
                <a href="#" className='lft lft1' >Corporate Information</a>
          </div>
          <LTranslate/>
    </div>
  )
}

export default LoginFooter