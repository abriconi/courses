import styles from "./Header.module.scss";
import { Button } from "../common/Button/Button";
import logo from "../../img/logo-min.jpg";
import { LOGIN_TEXT } from "../../helpers/constants";

export const Header = () => {
  const onClick = () => console.log("click");

  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img src={logo} className={styles.logo} alt="course's logo" />
      </div>
      <div className={styles.loginWrapper}>
        <p className={styles.userName}>Dave</p>
        <Button name={LOGIN_TEXT.login} size="small" onClick={onClick} />
      </div>
    </header>
  );
};
