import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Spacer from '@site/src/components/Spacer';
import styles from './styles.module.css';
import BarklarmAnimated from '@site/static/img/barklarm.svg';
import { TypeAnimation } from "react-type-animation";

const HeaderView: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const [toTypeWords] = useState([
      'Github Actions', 2500,
      'Datadog Monitors', 2500,
      'Sentry', 2500,
      'And More ...', 2500,
    ]);

  return (
    <div
      className={styles.Container}
      style={{ height: 700 }}>
      <div>
        <h1 className={styles.HeaderTitle}>
          Radiate Issues <span className={styles.SeparatorText}>From</span>
        </h1>
        <Spacer height={10} />
        <TypeAnimation
          className={styles.HeaderTyper}
          sequence={toTypeWords}
          repeat={Infinity}
          />
        <Spacer height={20} />
        <p className={styles.DescriptionText}>{siteConfig.tagline}</p>
      </div>
      <BarklarmAnimated className={styles.BarklarmImage}/>
    </div>
  );
};

export default HeaderView;
