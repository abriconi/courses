import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>Welcome to Courses</h1>
    </header>
  );
};
