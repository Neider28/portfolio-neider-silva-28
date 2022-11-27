import { Header } from '@containers/Header.jsx';
import styles from '@styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Header />
      { children }
    </div>
  );
};

export { Layout };