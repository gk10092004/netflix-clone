import React from 'react'
import Image from 'next/image'
import style from 'styles/Translate.css'

function Translate() {
  return (
    <div id="laun">
        <Image src='/translates.png' width={20} height={20} alt="laung" id='select-laun'/>
        <select  id='select'>
            <option name="laun" value={0}>English</option>
            <option name="laun" value={1}>Hindi</option>
        </select>
    </div>
  )
}

export default Translate