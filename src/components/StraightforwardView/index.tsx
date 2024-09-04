import React from 'react';
import styles from './styles.module.css';
import Spacer from '@site/src/components/Spacer';
import IntroVideo from '@site/static/video/intro.webm';

const StraightforwardView: React.FC = () => {
  return (
    <div className={styles.Container} >
      <div className={styles.Content} >
        <div className={styles.HeaderContainer} data-aos="flip-left" data-aos-duration="1000">
          <h3 className={styles.Tagline}>Why should you use Barklarm?</h3>
          <h1 className={styles.Title}>Reduce Cognitive Load</h1>
          <Spacer height={20} />
          <p className={styles.Description}>
            Barklarm Centralizes all your obserbability alarms, including build, monitoring, logging, etc. So you dont need to be looking at many pages at the time. Free & Open Soruce
          </p>
          <video controls src={IntroVideo} preload="metadata"/>
        </div>
      </div>
    </div>
  );
};

export default StraightforwardView;
