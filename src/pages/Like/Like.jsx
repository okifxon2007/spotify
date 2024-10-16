// import React, { useEffect, useState } from 'react';
// import Leftmenu from '../../components/Leftmenu/Leftmenu';
// import Rightmenu from '../../components/Rightmenu/Rightmenu';
// import '../Like/index.css';
// import rasm from '../../img/like.png';
// import grup from '../../img/grup.png';
// import userr from '../../img/user.png';
// import Footermusic from '../../components/Footermusic/Footermusic';

// const Like = () => {
//   const [likedSongs, setLikedSongs] = useState([]);
//   const [footerTrack, setFooterTrack] = useState(null);

//   const handleLike = (song) => {
//     const storedLikes = JSON.parse(localStorage.getItem('likes')) || [];
//     const isLiked = storedLikes.some(storedSong => storedSong.id === song.id);
//     const updatedLikes = isLiked
//       ? storedLikes.filter(storedSong => storedSong.id !== song.id) 
//       : [...storedLikes, song];

//     localStorage.setItem('likes', JSON.stringify(updatedLikes));
//     setLikedSongs(updatedLikes);
//   };

//   const handleImageClick = (song) => {
//     setFooterTrack({
//       name: song.name,
//       artist: song.artist,
//       preview_url: song.preview_url,
//     });
//   };

//   useEffect(() => {
//     const storedLikes = JSON.parse(localStorage.getItem('likes')) || [];
//     setLikedSongs(storedLikes);
//   }, []);

//   return (
//     <div className='liked-music'>
//       <Leftmenu />
//       <div className="like-header">
//         <img src={rasm} alt="Liked songs" />
//       </div>
//       <div className="like-music-list">
//         {likedSongs.map((song, index) => (
//           <div key={index} className="song-item">
//             <img src={song.image} alt={song.name} onClick={() => handleImageClick(song)} />
//             <div className="song-details">
//               <h3>{song.name}</h3>
//               <p>{song.artist}</p>
//               <button onClick={() => handleLike(song)}>Remove from Likes</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Footermusic track={footerTrack} />
//       <Rightmenu />
//     </div>
//   );
// };

// export default Like;
import React, { useEffect, useState } from 'react';
import Leftmenu from '../../components/Leftmenu/Leftmenu';
import Rightmenu from '../../components/Rightmenu/Rightmenu';
import '../Like/index.css';
import rasm from '../../img/like.png';
import grup from '../../img/grup.png';
import userr from '../../img/user.png';
import Footermusic from '../../components/Footermusic/Footermusic';

const Like = () => {
  const [likedSongs, setLikedSongs] = useState([]);
  const [footerTrack, setFooterTrack] = useState(null);

  const handleLike = (song) => {
    const storedLikes = JSON.parse(localStorage.getItem('likes')) || [];
    const isLiked = storedLikes.some(storedSong => storedSong.id === song.id);
    const updatedLikes = isLiked
      ? storedLikes.filter(storedSong => storedSong.id !== song.id)
      : [...storedLikes, song];

    localStorage.setItem('likes', JSON.stringify(updatedLikes));
    setLikedSongs(updatedLikes);
  };

  const handleImageClick = (song) => {
    setFooterTrack({
      name: song.name,
      artist: song.artist,
      preview_url: song.preview_url,
    });
  };

  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem('likes')) || [];
    setLikedSongs(storedLikes);
  }, []);

  return (
    <div className='homethreaddf conta'>
      <Leftmenu />
      <div className="mainwidthhh">
        <nav className='navv'>
          <p><i className="fa-solid fa-arrow-left"></i></p>
          <p><i className="fa-solid fa-arrow-right"></i></p>
          <div className="userrr">
            <img src={userr} alt="user" />
          </div>
        </nav>

        <div className="musicmenuonee">
          <img src={rasm} alt="rasm" />
          <div className="musicmen-p">
            <h2>PUBLIC <br /> PLAYLIST</h2>
            <h1>Liked Songs</h1>
            <p>{likedSongs.length} songs</p>
          </div>
        </div>

        <div className="musictop">
          <div className="mpagenav">
            <img src={grup} alt="grup" />
            <select>
              <option>Custom Order</option>
            </select>
          </div>

          <div className="mpagenav2">
            <ul>
              <li>#Title</li>
              <li>Album</li>
              <li>DATE ADDED</li>
              <li><i className="fa-regular fa-clock"></i></li>
            </ul>
            <hr />
          </div>

          <div className="topmusic">
            {likedSongs.length > 0 ? (
              likedSongs.map((song, index) => {
                const isLiked = likedSongs.some(storedSong => storedSong.id === song.id);

                return (
                  <div onClick={() => handleImageClick(song)} key={song.id} className="tmcard">
                    <div className="dvdf">
                    <div className="dvdff">
                    <p className='tmraqam'>{index + 1}</p>
                      <img src={song.album.images[0]?.url || rasm} alt={song.name} onClick={() => handleImageClick(song)} />
                      <h2 className='tmname'>{song.name.slice(0,3).split("").join("")} <br /><span></span></h2>
                      <p className='albumname'>{song.album.name}</p>

                    </div>
                      <h3 className='likeic' onClick={() => handleLike(song)}>
                        {isLiked ? <span style={{ color: 'green' }}>💚</span> : <span>🤍</span>}
                      </h3>
                    </div>
                    <h2 className='tmtime'>{Math.floor(song.duration_ms / 60000)}:{('0' + Math.floor((song.duration_ms % 60000) / 1000)).slice(-2)}</h2>
                  </div>
                );
              })
            ) : (
              <p className='mal'>Tanlangan malumotlar yo'q</p>
            )}
          </div>
        </div>
        <Footermusic track={footerTrack} />
      </div>
     
      <Rightmenu />
    </div>
  );
};

export default Like;
