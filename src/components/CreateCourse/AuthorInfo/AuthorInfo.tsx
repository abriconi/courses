import { BUTTON_TEXT, COURSE_INFO, TEXT } from "../../../helpers/constants";
import { mockedAuthorsList } from "../../../helpers/mockedData";
import { Button } from "../../common/Button/Button";
import styles from "./AuthorInfo.module.scss";
export const AuthorInfo = () => {
  const onClick = () => console.log();
  return (
    <div className={styles.authorWrapper}>
      <h1 className={styles.header}>{COURSE_INFO.authors}</h1>
      <ul className={styles.authorList}>
        {mockedAuthorsList.map((author) => (
          <li className={styles.authorItem} key={author.id}>
            <p>{author.name}</p>
            <Button
              name={BUTTON_TEXT.addAuthor}
              size="small"
              onClick={onClick}
            />
          </li>
        ))}
      </ul>
      <div className={styles.courseAuthors}>
        <h1 className={styles.header}>{COURSE_INFO.courseAuthors}</h1>
        <p className={styles.description}>{TEXT.authorEmpty}</p>
      </div>
    </div>
  );
};
