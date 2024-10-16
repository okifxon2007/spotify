import React from 'react'
import '../Rightmenu/index.css'
import user from '../../img/frame.png'
const Rightmenu = () => {
  return (
    <div>
       <div className='homemenuu'>
      <h1>Friend Activity <span className='xspan'>x</span></h1> <br />
      <p className='hp'>Let friends and followers on Spotify see what you’re listening to.</p> <br /> <br />
      <img src={user} alt="" /> <br /> <br />
      <img src={user} alt="" /> <br /> <br />
      <img src={user} alt="" /> <br />

      <p className='hp'>Go to Settings Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
      <button className='rmbut'>SETTINGS</button>
    </div>
    </div>
  )
}

export default Rightmenu