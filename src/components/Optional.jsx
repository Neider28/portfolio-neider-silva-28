import React from 'react';
import { Icon } from '@iconify/react';
import { AppContext } from '@context/AppContext.js';
import styles from '@styles/Optional.module.css';

const Optional = () => {
  const { onMode, setOnMode } = React.useContext(AppContext);

  const handleMode = () => {
    setOnMode(!onMode);
  };

  return (
    <section className={styles.Optional}>
      <button onClick={handleMode}>
        <span>
          {
            onMode ? (<Icon icon="akar-icons:moon-fill" className={styles.moon_icon} />)
            : (<Icon icon="akar-icons:sun" className={styles.sun_icon} />)
          }
        </span>
      </button>
    </section>
  );
};

export { Optional };