import { Hero } from '@containers/Hero.jsx';
import { Education } from '@containers/Education.jsx';
import { Skills } from '@containers/Skills.jsx';
import { Projects } from '@containers/Projects.jsx';
import { Contact } from '@containers/Contact.jsx';
import { Footer } from '@containers/Footer.jsx';
import styles from '@styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
};