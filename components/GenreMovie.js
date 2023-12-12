import React from 'react'
import Image from 'next/image'
import style from 'styles/Genre.css'

const GenreMovie = (props) => {
  return (
    <a href={props.lik} className='link'>
    <li className="movies">
        <Image src={props.MValue} alt="jawan" width={100} height={100}  className='moviesSize'/>
        <span className='moviesName'>{props.MName}</span>
    </li>
    </a>
  )
}

export default GenreMovie