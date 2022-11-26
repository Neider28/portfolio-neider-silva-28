import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { AppContext } from '@context/AppContext.js';
import speakers from '@assets/speakers.png';
import person from '@assets/person.png';
import styles from '@styles/Education.module.css';

const Education = () => {
  const { onMode, education } = React.useContext(AppContext);

  return (
    <section className={styles.education} ref={education}>
      <div className={styles.education_image}>
        <Image src={speakers} alt="speakers" width="100%" height="100%" layout="responsive" />
      </div>
      <div className={styles.education_title}>
        <h2>EDUCATION</h2>
      </div>
      <div className={styles.education_content}>
        <div className={styles.education_cards}>
          <article className={styles.education_card}>
            <div>
              <span><Icon icon="fa-solid:university" className={styles.education_icon} /></span>
              <p>I am studying fourth semester of Systems Engineering at the Autonomous University of Bucaramanga; Santander, Colombia.</p>
            </div>
          </article>
          <article className={styles.education_card}>
            <div>
              <span><Icon icon="fa-solid:crown" className={styles.education_icon} /></span>
              <span className={styles.education_link}>
                <a href="https://platzi.com/p/neidersilva28/" target="_blank" rel="noopener noreferrer">
                  <Icon icon="charm:link-external" className={styles.education_icon} />
                </a>
              </span>
              <p>I have taken several programming courses at Platzi.</p>
            </div>
          </article>
          <article className={styles.education_card}>
            <div>
              <span><Icon icon="fa6-solid:language" className={styles.education_icon} /></span>
              <p>English level B1.</p>
            </div>
          </article>
        </div>
        <div className={styles.education_cont_image}>
          <Image src={person} alt="person" width="100%" height="100%" layout="responsive" />
        </div>
      </div>
    </section>
  );
};

export { Education };