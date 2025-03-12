import { useState } from "react";
import { AuthorType } from "../../helpers/interfaces";
import { createDate } from "../../helpers";
import { mockedAuthorsList } from "../../helpers/mockedData";
import styles from "./CreateCourse.module.scss";
import { CourseForm } from "./components/CourseForm/CourseForm";

export const CreateCourse = () => {
  const creationDate = createDate();
  const [authors, setAuthors] = useState<AuthorType[]>(mockedAuthorsList);

  const addNewAuthor = (author: AuthorType) => {
    setAuthors((prev) => [...prev, author]);
  };

  return (
    <div className={styles.wrapper}>
      <CourseForm 
        creationDate={creationDate} 
        authors={authors} 
        onAddNewAuthor={addNewAuthor} 
      />
    </div>
  );
};
