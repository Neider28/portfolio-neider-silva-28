import React from 'react';
import Image from 'next/image';
import { Optional } from '@components/Optional.jsx';
import { AppContext } from '@context/AppContext.js';
import hero from '@assets/hero.png';
import styles from '@styles/Hero.module.css';

const Hero = () => {
  const { onMode, hero } = React.useContext(AppContext);

  return (
    <section className={styles.hero} ref={hero}>
      <Optional />
      <div className={styles.hero_title}>
        <h1>Hi, I'm Neider</h1>
        <span>Junior Front-End Developer</span>
      </div>
      <div className={styles.hero_image}>
        <Image src={hero} alt="hero" />
      </div>
    </section>
  );
};

export { Hero };