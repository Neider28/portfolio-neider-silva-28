import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { AppContext } from '@context/AppContext.js';
import micro from '@assets/micro.png';
import styles from '@styles/Contact.module.css';

const Contact = () => {
  const { onMode, contact } = React.useContext(AppContext);

  return (
    <section className={styles.contact} ref={contact}>
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
            <Icon icon="fa-brands:github-square" className={styles.contact_icon} />
          </span>
          </a>
        </div>
        <div className={styles.contact_item}>
          <a href="https://www.linkedin.com/in/neidersilva28/" target="_blank" rel="noopener noreferrer">
          <span>
            <Icon icon="akar-icons:linkedin-box-fill" className={styles.contact_icon} />
          </span>
          </a>
        </div>
        <div className={styles.contact_item}>
          <a href="https://twitter.com/neiders28" target="_blank" rel="noopener noreferrer">
          <span>
            <Icon icon="fa-brands:twitter-square" className={styles.contact_icon} />
          </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export { Contact };