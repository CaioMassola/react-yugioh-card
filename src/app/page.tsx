'use client'
import {
  useCallback,
  useState
} from 'react';
import Icon from '@mui/material/Icon';
import Cards from '@/components/cards';
import Backgroud from '@/components/backgroud';
import StopIcon from '@mui/icons-material/Stop';
import Tooltip from '@mui/material/Tooltip';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import '@/styles/styles.scss';
import styles from '@/app/stye/style.module.scss';

export default function App() {

  const [isPlaying, setIsPlaying] = useState(false);
  let audioElement: HTMLAudioElement | null = null;

  const toggleAudio = () => {
    if (audioElement) {
      isPlaying ? audioElement.pause() : audioElement.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getIconButton = useCallback(() => {
    return (
      <Icon>
        {isPlaying ? <StopIcon /> : <PlayArrowIcon />}
      </Icon>
    )
  }, [isPlaying]);

  return (
    <Backgroud>
      <div className={styles.container}>
        <Tooltip title={isPlaying ? "Stop Music" : "Play Music"} arrow>
          <button onClick={toggleAudio} className={styles.btnAudio}>
            {getIconButton()}
          </button>
        </Tooltip>

        <Cards />
      </div>
      <audio ref={(element) => { audioElement = element; }} src="/yugioh.mp3" />
    </Backgroud>
  );
}