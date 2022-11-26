import React from 'react';
import { AppContext } from '@context/AppContext.js';
import { Icon } from '@iconify/react';
import styles from '@styles/Project.module.css';

const Project = ({ id, name, link, repo}) => {
  const { onMode } = React.useContext(AppContext);

  return (
    <article className={styles.project}>
      <div className={styles.project_popup}>
        <div>
          <h3>{ name }</h3>
          <a href={link} className={styles.project_link} target="_blank" rel="noopener noreferrer">
            SEE<span><Icon icon="akar-icons:arrow-right" /></span>
          </a>
          <a href={repo} className={styles.github} target="_blank" rel="noopener noreferrer">
            <Icon icon="akar-icons:github-fill" />
          </a>
        </div>
      </div>
    </article>
  );
};

export { Project };