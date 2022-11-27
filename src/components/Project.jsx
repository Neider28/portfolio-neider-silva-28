import React from 'react';
import Image from "next/legacy/image";
import { AppContext } from '@context/AppContext.js';
import { Icon } from '@iconify/react';
import styles from '@styles/Project.module.css';

const Project = ({name, link, repo, img}) => {
  const { onMode } = React.useContext(AppContext);

  return (
    <article className={`${styles.project} ${onMode && `${styles.light_2}`}`}>
      <Image src={img} alt="diamond" width="100%" height="75%" layout="responsive" />
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