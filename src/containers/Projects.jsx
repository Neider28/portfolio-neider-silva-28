import React from 'react';
import Image from 'next/image';
import { AppContext } from '@context/AppContext.js';
import { Project } from '@components/Project.jsx';
import diamond from '@assets/diamond.png';
import styles from '@styles/Projects.module.css';

const Projects = () => {
  const { onMode, projects } = React.useContext(AppContext);
  const project = [
    {id: 1, name: "Movie Express", link: "https://neider28.github.io/MovieExpress/#home", repo: "https://github.com/Neider28/MovieExpress"},
    {id: 2, name: "Ninja ToDo", link: "https://ninja-to-do-8f246.web.app/", repo: "https://github.com/Neider28/ninja-to-do"},
    {id: 3, name: "PlatziConf Merch", link: "https://platzi-store-37f12.web.app/", repo: "https://github.com/Neider28/platziConf-Merch/"},
    {id: 4, name: "Rick and Morty API", link: "https://neider28.github.io/RickAndMorty_API/", repo: "https://github.com/Neider28/RickAndMorty_API"},
    {id: 5, name: "Batatabit", link: "https://neider28.github.io/BatataBit/", repo: "https://github.com/Neider28/BatataBit"},
    {id: 6, name: "Platzi Day", link: "https://neider28.github.io/Platzi-Day/", repo: "https://github.com/Neider28/Platzi-Day"}
  ];

  return (
    <section className={styles.projects} ref={projects}>
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
              key={item.id}
            />
          )
        }
      </div>
    </section>
  );
};

export { Projects };