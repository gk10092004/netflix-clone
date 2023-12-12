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
        <MCard lik={Movies[0].Url} MValue={Movies[0].MLink} MName={Movies[0].Name}/>
        <MCard lik={Movies[1].Url} MValue={Movies[1].MLink} MName={Movies[1].Name}/>
        <MCard lik={Movies[2].Url} MValue={Movies[2].MLink} MName={Movies[2].Name}/>
        <MCard lik={Movies[3].Url} MValue={Movies[3].MLink} MName={Movies[3].Name}/>
        <MCard lik={Movies[4].Url} MValue={Movies[4].MLink} MName={Movies[4].Name}/>
        <MCard lik={Movies[5].Url} MValue={Movies[5].MLink} MName={Movies[5].Name}/>
        <MCard lik={Movies[6].Url} MValue={Movies[6].MLink} MName={Movies[6].Name}/>
        <MCard lik={Movies[7].Url} MValue={Movies[7].MLink} MName={Movies[7].Name}/>
        <MCard lik={Movies[8].Url} MValue={Movies[8].MLink} MName={Movies[8].Name}/>
        <MCard lik={Movies[9].Url} MValue={Movies[9].MLink} MName={Movies[9].Name}/>
        <MCard lik={Movies[10].Url} MValue={Movies[10].MLink} MName={Movies[10].Name}/>
        <MCard lik={Movies[11].Url} MValue={Movies[11].MLink} MName={Movies[11].Name}/>
        <MCard lik={Movies[12].Url} MValue={Movies[12].MLink} MName={Movies[12].Name}/>
        <MCard lik={Movies[13].Url} MValue={Movies[13].MLink} MName={Movies[13].Name}/>
        <MCard lik={Movies[14].Url} MValue={Movies[14].MLink} MName={Movies[14].Name}/>
        <MCard lik={Movies[15].Url} MValue={Movies[15].MLink} MName={Movies[15].Name}/>
        <MCard lik={Movies[16].Url} MValue={Movies[16].MLink} MName={Movies[16].Name}/>
        <MCard lik={Movies[17].Url} MValue={Movies[17].MLink} MName={Movies[17].Name}/>
        <MCard lik={Movies[18].Url} MValue={Movies[18].MLink} MName={Movies[18].Name}/>
        <MCard lik={Movies[19].Url} MValue={Movies[19].MLink} MName={Movies[19].Name}/>
        <MCard lik={Movies[20].Url} MValue={Movies[20].MLink} MName={Movies[20].Name}/>
        <MCard lik={Movies[21].Url} MValue={Movies[21].MLink} MName={Movies[21].Name}/>
        <MCard lik={Movies[22].Url} MValue={Movies[22].MLink} MName={Movies[22].Name}/>
        <MCard lik={Movies[23].Url} MValue={Movies[23].MLink} MName={Movies[23].Name}/>
        <MCard lik={Movies[24].Url} MValue={Movies[24].MLink} MName={Movies[24].Name}/>
      </ul>

    </section>
  )
}

export default page;