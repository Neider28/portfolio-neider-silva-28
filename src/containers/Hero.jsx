import React from 'react';
import Image from "next/legacy/image";
import { Optional } from '@components/Optional.jsx';
import { AppContext } from '@context/AppContext.js';
import welcome from '@assets/welcome.png';
import styles from '@styles/Hero.module.css';

const Hero = () => {
  const { onMode, hero } = React.useContext(AppContext);

  return (
    <section className={`${styles.hero} ${onMode && `${styles.light_1}`}`} ref={hero}>
      <Optional />
      <div className={styles.hero_title}>
        <h1>Hi, I'm Neider</h1>
        <span>Junior Front-End Developer</span>
      </div>
      <span className={styles.hero_image}>
        <Image src={welcome} alt="hero" width="100%" height="100%" layout="responsive" priority={true} />
      </span>
    </section>
  );
};

export { Hero };