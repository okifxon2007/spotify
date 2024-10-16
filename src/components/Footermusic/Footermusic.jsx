import React, { useState, useEffect, useRef } from 'react';
import '../Footermusic/index.css'; // CSS fayli

const Footermusic = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Effect to automatically play the song when the track changes or is new
  useEffect(() => {
    if (track && audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true); // Set playing to true when track is available
    } else {
      setIsPlaying(false); // If no track, stop the audio
    }
  }, [track]);

  // Toggle play and pause
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="crm">
      <div className="footer-container conta">
        <div className="footer-one-dem">
          <p>
            {track ? `${track.name} - ${track.artist}` : 'No song playing'}
          </p>
        </div>

        <div className="dvs">
          <div className="footer-three-dem">
            <i className="fas fa-step-backward"></i>
            <button onClick={togglePlay} className="play-pause-btn">
              {isPlaying ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}
            </button>
            <i className="fas fa-step-forward"></i>
          </div>

          <div className="footer-two-dem">
            <span>0:00</span>
            <input type="range" min="0" max="100" defaultValue="0" className="progress-bar" />
            <span>3:45</span>
          </div>
        </div>

        <div className="volume">
          <i className="fas fa-volume-up"></i>
        </div>

        {/* Yashirin audio player */}
        {track && <audio ref={audioRef} src={track.preview_url}></audio>}
      </div>
    </div>
  );
};

export default Footermusic;
