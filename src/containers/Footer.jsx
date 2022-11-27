import React from 'react';
import { AppContext } from '@context/AppContext.js';
import { Icon } from '@iconify/react';
import styles from '@styles/Footer.module.css';

const Footer = () => {
  const { onMode } = React.useContext(AppContext);

  return (
    <footer className={`${styles.footer} ${onMode && `${styles.light_3}`}`}>
      <div>
        <span>
          <Icon icon="entypo:code" />
        </span>
        <p>By Neider Silva, 2023</p>
      </div>
    </footer>
  );
};

export { Footer };