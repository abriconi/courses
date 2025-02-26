import styles from "./Header.module.scss";
import { Button } from "../Button/Button";
import logo from "../../../public/img/logo-min.jpg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img src={logo} className={styles.logo} alt="course's logo" />
      </div>
      <div className={styles.loginWrapper}>
        <p className={styles.userName}>Dave</p>
        <Button name="Login" variant="outlined" size="large"/>
      </div>
    </header>
  );
};
