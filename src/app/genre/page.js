let values =1;
export {values};
import React from 'react'
import Link from 'next/link';
import GCard from 'components/Genre.js'
import Footer from 'components/Footer.js'
import style from 'styles/GPage.css'
import GHeader from 'components/GHeader.js'


const page = () => {
  const Genre =[
    {
      Name:"New in Netflix",
      ReadMore:"Read about Netflix TV shows and movies and watch bonus videos on Tudum.com."
    },
    {
      Name:"Horror Movies"
    },
    {
      Name:"Action Movies"
    },
    {
      Name:"Telugu-Language Movies"
    },
    {
      Name:"Comedy Movies"
    },
    {
      Name:"Desi & Chill"
    },
    {
      Name:"Thriller Movies"
    },
    {
      Name:"Action & Adventure Movies"
    },
    {
      Name:"New Releases"
    },
    {
      Name:"Violent Movies"
    },
    {
      Name:"Indian Comedy Movies"
    },
    {
      Name:"Sci-Fi & Fantasy Movies"
    },
    {
      Name:"Crime Movies"
    },
    {
      Name:"Movies Based on Real Life"
    },
    {
      Name:"Hidden Movies"
    },
  ];
  return (
    
     <div className='genreMain'>
      <GHeader/>
      <div id="movieEx">
        <h1 id='genreMovieHead'>Movies</h1>
        <div id='gerneMovieContant'>Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</div>
      </div>
      <div id="genre">
        {Genre.map(genre => <GCard GName={genre.Name} />)}
      </div>
      <div id="blurGcard">
        <GCard GName={Genre[0].Name}/>
        <GCard GName={Genre[1].Name}/>
      </div>
      <div id="joinNowWatch">
        <div id="joinContant">
          <h1 id="moreWatchHead">There’s even more to watch.</h1>
          <p id="paraContact">Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals and more. Watch as much as you want, anytime you want.</p>
          <Link href='/' className='Gjoin'><div className="Gjoindiv">JOIN NOW</div></Link>
        </div>
      </div>
      <Footer  Read={Genre[0].ReadMore}/>    

      
     </div>
  )
}

export default page