import React from 'react'
import gif from '../../img/live.gif'
import '../Leftmenu/index.css'
import like from '../../img/like.png'
import plus from '../../img/plus.png'
import { useNavigate } from 'react-router-dom'
const Leftmenu = () => {
  const nav = useNavigate()
  function handlehome(){
    nav('/')
  }
  function handlesong(){
    nav('/like')
  }
  return (
    <div className='homemenu'>
      <img src={gif} alt="" />
      <ul>
        <li onClick={handlehome}><i class="fa-solid fa-house"></i> Home</li>
        <li><i class="fa-solid fa-magnifying-glass"></i>Search</li>
        <li onClick={handlesong}><i class="fa-solid fa-door-open"></i>Your Library</li>
        <br />
        <br />
        <li className='likeli'><img className='likeimg' src={plus} alt="" /><span>Create playlist</span></li> 
        <li className='likeli' onClick={handlesong}><img className='likeimg' src={like} alt="" /><span>Liked songs</span></li> <br />
        <hr />
       <br />
      </ul>
      <div className="malumot">
      <p>Chill Mix</p>
        <p>Insta Hits</p>
        <p>Your Top Songs 2021</p>
        <p>Mellow Songs</p>
        <p>Anime Lofi & Chillhop Music</p>
        <p>BG Afro “Select” Vibes</p>
        <p>Afro “Select” Vibes</p>
        <p>Happy Hits!</p>
        <p>Deep Focus</p>
        <p>Instrumental Study</p>
        <p>OST Compilations</p>
        <p>Nostalgia for old souled mill...</p>
        <p>Mixed Feelings</p>
      </div>
    </div>
  )
}

export default Leftmenu