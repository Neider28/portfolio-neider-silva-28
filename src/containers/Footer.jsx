import React from 'react';
import { AppContext } from '@context/AppContext.js';
import { Icon } from '@iconify/react';
import styles from '@styles/Footer.module.css';

const Footer = () => {
  const { onMode } = React.useContext(AppContext);

  return (
    <footer className={styles.footer}>
      <div>
        <span>
          <Icon icon="entypo:code" />
        </span>
        <p>By Neider Silva, 2022</p>
      </div>
    </footer>
  );
};

export { Footer };