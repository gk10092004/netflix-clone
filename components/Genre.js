import React from 'react'
import style from 'styles/Genre.css'
import MCard from 'components/GenreMovie.js'
import {values} from 'src/app/genre/page.js'
import {Movies} from './moviesApi.mjs'
const page = (props) => {
    
    var i=values;
  return (
    <section className="genreCard">
      <h2 className="genreName">{props.GName}</h2>
      <ul className="genreMovies">
        {Movies.map(movie => <MCard lik={movie.Url} MValue={movie.MLink} MName={movie.Name} />)}
      </ul>

    </section>
  )
}

export default page;