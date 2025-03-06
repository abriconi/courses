
import { BUTTON_TEXT } from "../../../../helpers/constants";
import { AuthorType } from "../../../../helpers/interfaces";
import { Button } from "../../../common/Button/Button";
import styles from "./SelectedAuthors.module.scss";

interface SelectedAuthorsProps {
  pickedAuthors: AuthorType[];
  onDeleteAuthor: (author: AuthorType) => void;
}

export const SelectedAuthors: React.FC<SelectedAuthorsProps> = ({ pickedAuthors, onDeleteAuthor }) => {
  return (
    <div className={styles.selectedAuthors}>
      <h2>Course Authors</h2>
      {pickedAuthors.map((author) => (
        <div key={author.id}>
          <span>{author.name}</span>
          <Button name={BUTTON_TEXT.deleteAuthor} onClick={() => onDeleteAuthor(author)} />
        </div>
      ))}
    </div>
  );
};
