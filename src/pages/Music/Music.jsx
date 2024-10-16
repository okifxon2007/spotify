
// import React, { useState, useEffect, useRef } from 'react';
// import Leftmenu from '../../components/Leftmenu/Leftmenu';
// import Rightmenu from '../../components/Rightmenu/Rightmenu';
// import '../Music/index.css';
// import grup from '../../img/grup.png';
// import axios from '../../utils/axios';
// import { useParams } from 'react-router-dom';
// import Footermusic from '../../components/Footermusic/Footermusic';

// const Music = () => {
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const params = useParams('');
//   const par = params.id;
//   const [likes, setLikes] = useState([]);
//   const [playingIndex, setPlayingIndex] = useState(null);
//   const audioRefs = useRef([]);
//   const [footerTrack, setFooterTrack] = useState(null); // Footer uchun trek ma'lumotlari

//   const fetchDatatwo = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`playlists/${par}`);
//       setData(response.data);
//     } catch (error) {
//       setError('Xato yuz berdi, ma’lumotlarni yuklashda muammo bor.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDatatwo();
//   }, []);

//   const togglePlay = (index) => {
//     if (playingIndex === index) {
//       audioRefs.current[index].pause();
//       setPlayingIndex(null);
//     } else {
//       if (playingIndex !== null) {
//         audioRefs.current[playingIndex].pause();
//       }
//       audioRefs.current[index].play();
//       setPlayingIndex(index);
//       setFooterTrack({
//         name: data.tracks.items[index].track.name,
//         artist: data.tracks.items[index].track.artists.map(artist => artist.name).join(', '),
//         preview_url: data.tracks.items[index].track.preview_url,
//       });
//     }
//   };

//   const handleFooterPlayPause = (isPlaying) => {
//     if (playingIndex !== null && audioRefs.current[playingIndex]) {
//       if (isPlaying) {
//         audioRefs.current[playingIndex].play();
//       } else {
//         audioRefs.current[playingIndex].pause();
//       }
//     }
//   };

//   // `img` bosilganda trek ma'lumotlarini `Footermusic`ga yuborish
//   const handleImageClick = (index) => {
//     setFooterTrack({
//       name: data.tracks.items[index].track.name,
//       artist: data.tracks.items[index].track.artists.map(artist => artist.name).join(', '),
//       preview_url: data.tracks.items[index].track.preview_url,
//     });
//   };

//   // `grup` rasmi bosilganda ishlatiladigan funksiya
//   const handleImageClickFromGrup = () => {
//     setFooterTrack({
//       name: "Grup Track", // Grup rasmi uchun statik trek nomi
//       artist: "Grup Artist",   // Grup rasmi uchun artist nomi
//       preview_url: "URL_TO_GRUP_AUDIO", // Grup rasmi uchun audio fayl manzili
//     });
//   };

//   return (
//     <div className='homethreaddf conta'>
//       <Leftmenu />
//       <div className="mainwidthh">
//         <nav className='nav'>
//           <p><i className="fa-solid fa-arrow-left"></i></p>
//           <p><i className="fa-solid fa-arrow-right"></i></p>
//         </nav>

//         <div className="musicmenuone">
//           {loading ? (
//             <span className="loader"></span>
//           ) : error ? (
//             <p>{error}</p>
//           ) : (
//             data && (
//               <div className="musicmen-item">
//                 <img src={data.images[0]?.url} alt={data.name} />
//                 <div className="musicmen-p">
//                   <h2>PUBLIC PLAYLIST</h2>
//                   <h1>{data.name.split(" ").slice(0, 2).join(" ")}</h1>
//                   <p>{data.description.split(" ").slice(0, 4).join(" ")}</p>
//                   <h3>Made by {data.owner?.display_name}</h3>
//                 </div>
//               </div>
//             )
//           )}
//         </div>

//         <div className="musictop">
//           <div className="mpagenav">
//             {/* Grup rasmini bosganda ishlatiladigan hodisa */}
//             <img src={grup} alt="Grup" onClick={handleImageClickFromGrup} />
//             <select>
//               <option>Custom Order</option>
//             </select>
//           </div>

//           <div className="mpagenav2">
//             <ul>
//               <li>#Title</li>
//               <li>Album</li>
//               <li>DATE ADDED</li>
//               <li><i className="fa-regular fa-clock"></i></li>
//             </ul>
//             <hr />
//           </div>

//           {data?.tracks?.items?.length > 0 ? (
//             data.tracks.items.map((mix, index) => (
//               <div key={index} className="topmusic">
//                 <div className="tmcard">
//                   <div className="tmtmone-p">
//                     {/* img elementiga onClick hodisasini qo'shamiz */}
//                     <img
//                       src={mix.track.album.images[0]?.url}
//                       alt={mix.track.name}
//                       onClick={() => handleImageClick(index)}
//                     />
//                     <h2 className="tmname">
//                       {mix.track.name.split(" ").slice(0, 2).join(" ")} <br />
//                       <span>{mix.track.artists.map(artist => artist.name).join(', ').split(" ").slice(0, 2).join(" ")}</span>
//                     </h2>
//                     <p className="albumname">{mix.track.album.name}</p>
//                   </div>
//                   <div className="tmtm-p">
//                     <h3 onClick={() => handleLike(index)}>
//                       {likes.includes(mix.track.id) ? (
//                         <span style={{ color: 'green' }}>💚</span>
//                       ) : (
//                         <span>🤍</span>
//                       )}
//                     </h3>
//                     <h2 className="tmtime">
//                       {Math.floor(mix.track.duration_ms / 60000)}:{('0' + Math.floor((mix.track.duration_ms % 60000) / 1000)).slice(-2)}
//                     </h2>
//                     <audio
//                       ref={el => (audioRefs.current[index] = el)}
//                       src={mix.track.preview_url}
//                     ></audio>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : data ? (
//             <span className="loader"></span>
//           ) : (
//             <p>No data available</p>
//           )}
//         </div>

//         {/* Footermusic komponentiga trek va holat boshqaruvchi funksiyani jo'natamiz */}
//         <Footermusic track={footerTrack} onPlayPause={handleFooterPlayPause} />
//       </div>
//       <Rightmenu />
//     </div>
//   );
// };

// export default Music;


import React, { useState, useEffect, useRef } from 'react';
import Leftmenu from '../../components/Leftmenu/Leftmenu';
import Rightmenu from '../../components/Rightmenu/Rightmenu';
import '../Music/index.css';
import grup from '../../img/grup.png';
import axios from '../../utils/axios';
import { useParams } from 'react-router-dom';
import Footermusic from '../../components/Footermusic/Footermusic';

const Music = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const par = params.id;
  const [likes, setLikes] = useState([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const audioRefs = useRef([]);
  const [footerTrack, setFooterTrack] = useState(null); // Footer uchun trek ma'lumotlari

  const fetchDatatwo = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`playlists/${par}`);
      setData(response.data);
    } catch (error) {
      setError('Xato yuz berdi, ma’lumotlarni yuklashda muammo bor.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDatatwo();
  }, []);

  const togglePlay = (index) => {
    if (playingIndex === index) {
      audioRefs.current[index].pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null) {
        audioRefs.current[playingIndex].pause();
      }
      audioRefs.current[index].play();
      setPlayingIndex(index);
      setFooterTrack({
        name: data.tracks.items[index].track.name,
        artist: data.tracks.items[index].track.artists.map(artist => artist.name).join(', '),
        preview_url: data.tracks.items[index].track.preview_url,
      });
    }
  };

  const handleFooterPlayPause = (isPlaying) => {
    if (playingIndex !== null && audioRefs.current[playingIndex]) {
      if (isPlaying) {
        audioRefs.current[playingIndex].play();
      } else {
        audioRefs.current[playingIndex].pause();
      }
    }
  };

  const handleLike = (song) => {
    const storedLikes = JSON.parse(localStorage.getItem('likes')) || [];
    const isLiked = storedLikes.some(storedSong => storedSong.id === song.id);
    const updatedLikes = isLiked
      ? storedLikes.filter(storedSong => storedSong.id !== song.id) 
      : [...storedLikes, song];

    localStorage.setItem('likes', JSON.stringify(updatedLikes));
    setLikes(updatedLikes);
  };

  const handleImageClick = (index) => {
    setFooterTrack({
      name: data.tracks.items[index].track.name,
      artist: data.tracks.items[index].track.artists.map(artist => artist.name).join(', '),
      preview_url: data.tracks.items[index].track.preview_url,
    });
  };

  const handleImageClickFromGrup = () => {
    setFooterTrack({
      name: "Grup Track",
      artist: "Grup Artist",
      preview_url: "URL_TO_GRUP_AUDIO",
    });
  };

  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem('likes')) || [];
    setLikes(storedLikes);
  }, []);

  return (
    <div className='homethreaddf conta'>
      <Leftmenu />
      <div className="mainwidthh">
        <nav className='nav'>
          <p><i className="fa-solid fa-arrow-left"></i></p>
          <p><i className="fa-solid fa-arrow-right"></i></p>
        </nav>

        <div className="musicmenuone">
          {loading ? (
            <span className="loader"></span>
          ) : error ? (
            <p>{error}</p>
          ) : (
            data && (
              <div className="musicmen-item">
                <img src={data.images[0]?.url} alt={data.name} />
                <div className="musicmen-p">
                  <h2>PUBLIC PLAYLIST</h2>
                  <h1>{data.name.split(" ").slice(0, 2).join(" ")}</h1>
                  <p>{data.description.split(" ").slice(0, 4).join(" ")}</p>
                  <h3>Made by {data.owner?.display_name}</h3>
                </div>
              </div>
            )
          )}
        </div>

        <div className="musictop">
          <div className="mpagenav">
            <img src={grup} alt="Grup" onClick={handleImageClickFromGrup} />
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

          {data?.tracks?.items?.length > 0 ? (
            data.tracks.items.map((mix, index) => (
              <div  onClick={() => handleImageClick(index)} key={index} className="topmusic">
                <div className="tmcard">
                  <div className="tmtmone-p">
                    <img
                      src={mix.track.album.images[0]?.url}
                      alt={mix.track.name}
                     
                    />
                    <h2 className="tmname">
                      {mix.track.name.split(" ").slice(0, 2).join(" ")} <br />
                      <span>{mix.track.artists.map(artist => artist.name).join(', ').split(" ").slice(0, 2).join(" ")}</span>
                    </h2>
                    <p className="albumname">{mix.track.album.name}</p>
                  </div>
                  <div className="tmtm-p">
                    <h3 onClick={() => handleLike(mix.track)}>
                      {likes.some(like => like.id === mix.track.id) ? (
                        <span style={{ color: 'green' }}>💚</span>
                      ) : (
                        <span>🤍</span>
                      )}
                    </h3>
                    <h2 className="tmtime">
                      {Math.floor(mix.track.duration_ms / 60000)}:{('0' + Math.floor((mix.track.duration_ms % 60000) / 1000)).slice(-2)}
                    </h2>
                    <audio
                      ref={el => (audioRefs.current[index] = el)}
                      src={mix.track.preview_url}
                    ></audio>
                  </div>
                </div>
              </div>
            ))
          ) : data ? (
            <span className="loader"></span>
          ) : (
            <p>No data available</p>
          )}
        </div>

        <Footermusic track={footerTrack} onPlayPause={handleFooterPlayPause} />
      </div>
      <Rightmenu />
    </div>
  );
};

export default Music;
