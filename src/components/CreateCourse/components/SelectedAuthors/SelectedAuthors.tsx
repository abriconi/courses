import { useMemo } from "react";
import { filterAuthorsById } from "../../../../helpers";
import { BUTTON_TEXT } from "../../../../helpers/constants";
import { AuthorsPicked, AuthorType } from "../../../../helpers/interfaces";
import { Button } from "../../../common/Button/Button";
import styles from "./SelectedAuthors.module.scss";

interface SelectedAuthorsProps {
  authors: AuthorType[];
  pickedAuthorsId: AuthorsPicked[];
  onDeleteAuthor: (index: number, author: AuthorType) => void;
}

export const SelectedAuthors: React.FC<SelectedAuthorsProps> = ({
  pickedAuthorsId,
  onDeleteAuthor,
  authors,
}) => {
  const pickedAuthors = useMemo(
    () => filterAuthorsById(pickedAuthorsId, authors),
    [pickedAuthorsId],
  );

  if (pickedAuthorsId.length === 0) {
    return (
      <div className={styles.authors}>
        <h2 className={styles.header}>Course Authors</h2>
        <p className={styles.text}>No authors picked</p>
      </div>
    );
  }
  return (
    <div className={styles.authors}>
      <h2 className={styles.header}>Course Authors</h2>
      <div className={styles.authors__list}>
        {pickedAuthors.map((author, index) => (
          <div key={author.id} className={styles.author}>
            <span>{author.name}</span>
            <Button
              name={BUTTON_TEXT.deleteAuthor}
              onClick={() => onDeleteAuthor(index, author)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
