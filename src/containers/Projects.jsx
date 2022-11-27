import React from 'react';
import Image from "next/legacy/image";
import { AppContext } from '@context/AppContext.js';
import { Project } from '@components/Project.jsx';
import diamond from '@assets/diamond.png';
import data from '@data/data.js';
import styles from '@styles/Projects.module.css';

const Projects = () => {
  const { onMode, projects } = React.useContext(AppContext);
  const project = data.projects;

  return (
    <section className={`${styles.projects} ${onMode && `${styles.light_2}`}`} ref={projects}>
      <div className={styles.projects_image}>
        <Image src={diamond} alt="diamond" width="100%" height="100%" layout="responsive" />
      </div>
      <div className={styles.projects_title}>
          <h2>PROJECTS</h2>
      </div>
      <div className={styles.projects_content}>
        {
          project.map(item =>
            <Project 
              id={item.id}
              name={item.name}
              link={item.link}
              repo={item.repo}
              img={item.img}
              key={item.name}
            />
          )
        }
      </div>
    </section>
  );
};

export { Projects };