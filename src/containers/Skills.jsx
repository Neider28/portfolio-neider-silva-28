import React from 'react';
import Image from "next/legacy/image";
import { AppContext } from '@context/AppContext.js';
import { Skill } from '@components/Skill.jsx';
import cap from '@assets/cap.png';
import data from '@data/data.js';
import styles from '@styles/Skills.module.css';

const Skills = () => {
  const { onMode, skills } = React.useContext(AppContext);
  const skill = data.skills;

  return (
    <section className={`${styles.skills} ${onMode && `${styles.light_1}`}`} ref={skills}>
      <div className={styles.skills_image}>
        <Image src={cap} alt="cap" width="100%" height="100%" layout="responsive" />
      </div>
      <div className={styles.skills_title}>
        <h2>SKILLS</h2>
      </div>
      <div className={styles.skills_content}>
        {
          skill.map(item => 
            <Skill 
              icon={item.icon}
              name={item.name}
              key={item.name}
            />
          )
        }
      </div>
    </section>
  );
};

export { Skills };