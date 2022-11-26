import React from 'react';
import Image from 'next/image';
import { AppContext } from '@context/AppContext.js';
import { Skill } from '@components/Skill.jsx';
import cap from '@assets/cap.png';
import styles from '@styles/Skills.module.css';

const Skills = () => {
  const { onMode, skills } = React.useContext(AppContext);
  const skill = [
    {icon: "fa-brands:html5", name: "HTML5"},
    {icon: "ion:logo-css3", name: "CSS3"},
    {icon: "ion:logo-javascript", name: "JavaScript"},
    {icon: "fa-brands:react", name: "React.js"},
    {icon: "simple-icons:nextdotjs", name: "Next.js"},
    {icon: "fa-brands:node", name: "Node.js"},
    {icon: "fa-brands:java", name: "Java"},
    {icon: "fa-brands:npm", name: "NPM"},
    {icon: "cib:webpack", name: "Webpack"},
    {icon: "fa-brands:git-alt", name: "Git"},
    {icon: "ion:logo-github", name: "GitHub"},
    {icon: "fa-solid:terminal", name: "Terminal"}
  ];

  return (
    <section className={styles.skills} ref={skills}>
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