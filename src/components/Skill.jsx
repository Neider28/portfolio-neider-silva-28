import React from 'react';
import { AppContext } from '@context/AppContext.js';
import { Icon } from '@iconify/react';
import styles from '@styles/Skill.module.css';

const Skill = ({ icon, name }) => {
  const { onMode } = React.useContext(AppContext);

  return (
    <div className={`${styles.skill} ${onMode && `${styles.light_1}`}`}>
      <div className={styles.skill_cont}>
        <Icon icon={icon} className={styles.skill_icon} />
        <div className={styles.skill_popup}>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export { Skill };