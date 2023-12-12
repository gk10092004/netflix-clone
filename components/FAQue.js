'use client'
import React, { useState } from 'react'
import { useRef } from 'react'
import Image from 'next/image'
import style from '/styles/FAQue.css'

function FAQue(props) {
  const [plus,setPlus] = useState("/plus.png");
  const myRef = useRef(null);
  var display = 1;
  function PlusShow(){
    const elements = myRef.current;
    if (display==1){
      setPlus("/close.png");
      elements.style.display = 'flex';
      display = 0;
    }
    else{
      setPlus("/plus.png");
      elements.style.display = 'none';
      display = 1;
    }
    
  }
  
  return (
    <div className='queAns'>
    <div className="questionBox quebox" onClick={PlusShow} >
        <div className="que">{props.ques}</div>
        <div className="plus">
            <Image src={plus} alt="plus" width={35} height={35}  id='pcbtn'/>
        </div>
    </div>

    <div className="questionBox answ" ref={myRef}>
        <div className="que ans" >{props.ans1}</div>
        <div className="que ans">{props.ans2}</div>
    </div>
    </div>
    
  )
}

export default FAQue