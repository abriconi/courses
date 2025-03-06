import { BUTTON_TEXT } from "../../../../helpers/constants";
import { AuthorType } from "../../../../helpers/interfaces";
import { Button } from "../../../common/Button/Button";
import styles from "./AuthorsList.module.scss";

interface AuthorsListProps {
  authors: AuthorType[];
  onAddAuthor: (author: AuthorType) => void;
}

export const AuthorsList: React.FC<AuthorsListProps> = ({ authors, onAddAuthor }) => {
  return (
    <div className={styles.authors}>
      <h2 className={styles.header}>Available Authors</h2>
      <ul className={styles.authors__list}>
        {authors.map((author) => (
          <li key={author.id} className={styles.author}>
            <span>{author.name}</span>
            <Button name={BUTTON_TEXT.addAuthor} onClick={() => onAddAuthor(author)} />
          </li>
        ))}
      </ul>
    </div>
  );
};
