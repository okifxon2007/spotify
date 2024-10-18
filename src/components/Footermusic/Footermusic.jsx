

import React, { useState, useEffect, useRef } from 'react';
import '../Footermusic/index.css'; 

const Footermusic = ({ track, onNext, onPrevious }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (track && audioRef.current) {
      audioRef.current.pause(); 
      audioRef.current.load(); 
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [track]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progressPercentage = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(progressPercentage);
    }
  };

  const handleProgressChange = (e) => {
    const newProgress = e.target.value;
    if (audioRef.current) {
      const newTime = (newProgress / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setProgress(newProgress);
    }
  };

  return (
    <div className="crm">
      <div className="footer-container conta">
        <div className="footer-one-dem">
          <p>{track ? `${track.name} - ${track.artist}` : 'No song playing'}</p>
        </div>

        <div className="dvs">
          <div className="footer-three-dem">
           
              <i className="fas fa-step-backward"></i>
            
            <button onClick={togglePlayPause} className="play-pause-btn">
              {isPlaying ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}
            </button>
           
              <i className="fas fa-step-forward"></i>
            
          </div>

          <div className="footer-two-dem">
            <span>0:00</span>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressChange}
              className="progress-bar"
            />
            <span>3:45</span>
          </div>
        </div>

        <div className="volume">
          <i className="fas fa-volume-up"></i>
        </div>

        {track && (
          <audio
            ref={audioRef}
            src={track.preview_url}
            onTimeUpdate={handleTimeUpdate}
          ></audio>
        )}
      </div>
    </div>
  );
};

export default Footermusic;
