import { useState, useRef, useEffect, useCallback } from 'react';

const tracks = [
  { id: 1, name: 'Ambient Lab', freq: '88.1 FM', src: '/1.m4a' },
  { id: 2, name: 'Focus Mode', freq: '91.5 FM', src: '/2.m4a' }
];

const Radio = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const popupRef = useRef(null);

  // Play audio function
  const playAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.log('Audio play failed:', err);
            setIsPlaying(false);
          });
      }
    }
  }, [volume]);

  // Pause audio function
  const pauseAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  // Handle audio play/pause based on mute state
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
    if (!isMuted) {
      playAudio();
    } else {
      pauseAudio();
    }
  }, [isMuted, playAudio, pauseAudio, volume]);

  // Handle track change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = tracks[currentTrack].src;
      if (!isMuted) {
        audioRef.current.load();
        // Wait for canplay event before playing
        const handleCanPlay = () => {
          playAudio();
          audioRef.current.removeEventListener('canplay', handleCanPlay);
        };
        audioRef.current.addEventListener('canplay', handleCanPlay);
      }
    }
  }, [currentTrack, isMuted, playAudio]);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showPopup]);

  const handleRadioClick = (e) => {
    // Don't open popup if clicking on knob
    if (e.target.closest('.radio-knob')) {
      return;
    }
    e.stopPropagation();
    setShowPopup(!showPopup);
  };

  const handleMuteToggle = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsMuted((prev) => !prev);
  };

  const handleTrackChange = (trackIndex) => {
    setCurrentTrack(trackIndex);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="radio-container">
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={tracks[currentTrack].src}
        loop
        preload="auto"
      />

      {/* Radio SVG */}
      <div className="radio" onClick={handleRadioClick}>
        <svg
          viewBox="0 0 120 80"
          xmlns="http://www.w3.org/2000/svg"
          className="radio-svg"
        >
          {/* Radio body */}
          <rect
            x="2"
            y="2"
            width="116"
            height="76"
            rx="8"
            fill="#48D1CC"
            stroke="#1a1815"
            strokeWidth="2.5"
          />

          {/* Inner shadow/bevel */}
          <rect
            x="6"
            y="6"
            width="108"
            height="68"
            rx="6"
            fill="none"
            stroke="#3BB8B3"
            strokeWidth="2"
          />

          {/* Speaker grille background */}
          <rect
            x="12"
            y="12"
            width="60"
            height="40"
            rx="4"
            fill="#2a2a2a"
            stroke="#1a1815"
            strokeWidth="1.5"
          />

          {/* Speaker grille lines */}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <line
              key={i}
              x1="16"
              y1={17 + i * 5}
              x2="68"
              y2={17 + i * 5}
              stroke="#f7f3e9"
              strokeWidth="1.5"
              opacity="0.6"
            />
          ))}

          {/* Dial display */}
          <rect
            x="78"
            y="12"
            width="32"
            height="20"
            rx="2"
            fill="#f7f3e9"
            stroke="#1a1815"
            strokeWidth="1"
          />

          {/* Frequency text */}
          <text
            x="94"
            y="25"
            textAnchor="middle"
            fontSize="7"
            fontFamily="IBM Plex Mono, monospace"
            fill="#1a1815"
          >
            {tracks[currentTrack].freq}
          </text>

          {/* Signal indicator LED */}
          <circle
            cx="94"
            cy="40"
            r="4"
            fill={isMuted ? '#666' : '#ff3333'}
            stroke="#1a1815"
            strokeWidth="1"
            className={!isMuted && isPlaying ? 'radio-led-pulse' : ''}
          />

          {/* LED label */}
          <text
            x="94"
            y="50"
            textAnchor="middle"
            fontSize="5"
            fontFamily="IBM Plex Mono, monospace"
            fill="#1a1815"
          >
            {isMuted ? 'MUTE' : 'ON AIR'}
          </text>

          {/* Volume knob (clickable for mute toggle) */}
          <g
            className="radio-knob"
            onClick={handleMuteToggle}
            style={{ cursor: 'pointer' }}
          >
            <circle
              cx="30"
              cy="65"
              r="8"
              fill="url(#knobGradient)"
              stroke="#1a1815"
              strokeWidth="1.5"
            />
            <line
              x1="30"
              y1="59"
              x2="30"
              y2="63"
              stroke="#1a1815"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>

          {/* Tuning knob */}
          <circle
            cx="55"
            cy="65"
            r="6"
            fill="url(#knobGradient)"
            stroke="#1a1815"
            strokeWidth="1.5"
          />

          {/* Brand label */}
          <text
            x="94"
            y="70"
            textAnchor="middle"
            fontSize="6"
            fontFamily="Playfair Display, serif"
            fontStyle="italic"
            fill="#1a1815"
          >
            LibrerosLab
          </text>

          {/* Antenna */}
          <line
            x1="100"
            y1="2"
            x2="108"
            y2="-15"
            stroke="#1a1815"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="108" cy="-15" r="2" fill="#1a1815" />

          {/* Gradients */}
          <defs>
            <radialGradient id="knobGradient" cx="30%" cy="30%">
              <stop offset="0%" stopColor="#f7f3e9" />
              <stop offset="100%" stopColor="#c9c0a8" />
            </radialGradient>
          </defs>
        </svg>

        {/* Signal waves animation */}
        {!isMuted && (
          <div className="radio-waves">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>

      {/* Frequency Popup */}
      {showPopup && (
        <div className="radio-popup" ref={popupRef}>
          <div className="radio-popup-header">
            <span className="radio-popup-title">FREQUENCY SELECTOR</span>
            <button
              className="radio-popup-close"
              onClick={() => setShowPopup(false)}
            >
              x
            </button>
          </div>

          <div className="radio-popup-stations">
            {tracks.map((track, index) => (
              <div
                key={track.id}
                className={`radio-station ${currentTrack === index ? 'active' : ''}`}
                onClick={() => handleTrackChange(index)}
              >
                <span className="radio-station-indicator">
                  {currentTrack === index ? '●' : '○'}
                </span>
                <span className="radio-station-freq">{track.freq}</span>
                <span className="radio-station-name">{track.name}</span>
              </div>
            ))}
          </div>

          <div className="radio-popup-volume">
            <span className="radio-volume-label">VOLUME</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="radio-volume-slider"
            />
          </div>

          <div className="radio-popup-hint">
            Click knob to {isMuted ? 'unmute' : 'mute'}
          </div>
        </div>
      )}
    </div>
  );
};

export default Radio;
