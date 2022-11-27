import Image from "next/legacy/image";
import logo from '@assets/logo.png';
import styles from '@styles/Preload.module.css';

const Preload = () => {
  return (
    <div className={styles.preload}>
      <div className={styles.lds_circle}>
        <div>
          <Image src={logo} alt="logo" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export { Preload };