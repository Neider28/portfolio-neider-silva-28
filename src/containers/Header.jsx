import React from 'react';
import Image from "next/legacy/image";
import { Icon } from '@iconify/react';
import { AppContext } from '@context/AppContext.js';
import logo from '@assets/logo.png';
import styles from '@styles/Header.module.css';

const Header = () => {
  const { onMode, hero, education, skills, projects, contact } = React.useContext(AppContext);
  const [clicked, setClicked] = React.useState(false);

  const scrollTo = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <header className={styles.header}>
      <span className={styles.header_logo} onClick={() => scrollTo(hero)}>
        <Image src={logo} alt="logo" width="100%" height="100%" layout="responsive" priority={true} />
      </span>
      <nav className={styles.header_nav}>
        <ul className={`${styles.nav_mobile} ${clicked && `${styles.active}`}`}>
          <li onClick={() => scrollTo(hero)}>Home</li>
          <li onClick={() => scrollTo(education)}>Education</li>
          <li onClick={() => scrollTo(skills)}>Skills</li>
          <li onClick={() => scrollTo(projects)}>Projects</li>
          <li onClick={() => scrollTo(contact)}>Contact</li>
        </ul>
        <ul className={styles.nav_desktop}>
          <li onClick={() => scrollTo(hero)}><Icon icon="fa6-solid:house" className={styles.nav_icon} /></li>
          <li onClick={() => scrollTo(education)}><Icon icon="zondicons:education" className={styles.nav_icon} /></li>
          <li onClick={() => scrollTo(skills)}><Icon icon="fa6-solid:gauge-high" className={styles.nav_icon} /></li>
          <li onClick={() => scrollTo(projects)}><Icon icon="fa-solid:briefcase" className={styles.nav_icon} /></li>
          <li onClick={() => scrollTo(contact)}><Icon icon="fa-solid:paper-plane" className={styles.nav_icon} /></li>
        </ul>
        <div className={styles.nav_mobile_bars}>
          <button onClick={() => setClicked(!clicked)}>
            {
              clicked ? 
                <Icon icon="ep:close-bold" className={styles.icon_nav} />
                : <Icon icon="bx:menu-alt-right" className={styles.icon_nav} />
            }
          </button>
        </div>
      </nav>
    </header>
  );
};

export { Header };