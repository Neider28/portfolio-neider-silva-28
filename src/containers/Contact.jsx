import React from 'react';
import Image from "next/legacy/image";
import { Icon } from '@iconify/react';
import { AppContext } from '@context/AppContext.js';
import micro from '@assets/micro.png';
import gym from '@assets/gym.png';
import styles from '@styles/Contact.module.css';

const Contact = () => {
  const { onMode, contact } = React.useContext(AppContext);

  return (
    <section className={`${styles.contact} ${onMode && `${styles.light_1}`}`} ref={contact}>
      <div className={styles.contact_image}>
        <Image src={micro} alt="micro" width="100%" height="100%" layout="responsive" />
      </div>
      <div className={styles.contact_title}>
        <h2>CONTACT</h2>
      </div>
      <div className={styles.contact_icons}>
        <div className={styles.contact_item}>
          <a href="https://github.com/Neider28" target="_blank" rel="noopener noreferrer">
          <span>
            <Icon icon="cib:gmail" className={styles.contact_icon} />
          </span>
          </a>
        </div>
        <div className={styles.contact_item}>
          <a href="https://github.com/Neider28" target="_blank" rel="noopener noreferrer">
          <span>
            <Icon icon="uim:github-alt" className={styles.contact_icon} />
          </span>
          </a>
        </div>
        <div className={styles.contact_item}>
          <a href="https://www.linkedin.com/in/neidersilva28/" target="_blank" rel="noopener noreferrer">
          <span>
            <Icon icon="bxl:linkedin" className={styles.contact_icon} />
          </span>
          </a>
        </div>
        <div className={styles.contact_item}>
          <a href="https://twitter.com/neiders28" target="_blank" rel="noopener noreferrer">
          <span>
            <Icon icon="akar-icons:twitter-fill" className={styles.contact_icon} />
          </span>
          </a>
        </div>
      </div>
      <div className={styles.contact_img}>
        <Image src={gym} alt="gym" width="100%" height="100%" layout="responsive" />
      </div>
    </section>
  );
};

export { Contact };