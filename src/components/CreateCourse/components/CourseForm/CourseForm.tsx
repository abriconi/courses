import { useForm, useFieldArray } from "react-hook-form";
import styles from "./CourseForm.module.scss";
import {
  durationFormatter,
  generateId,
  transformAuthorArray,
} from "../../../../helpers";
import {
  LABEL_TEXT,
  PLACEHOLDER,
  BUTTON_TEXT,
  ROUTES,
} from "../../../../helpers/constants";
import {
  AuthorsPicked,
  AuthorType,
  CourseType,
  newCourseType,
} from "../../../../helpers/interfaces";
import { Button } from "../../../common/Button/Button";
import { Input } from "../../../common/Input/Input";
import { Textarea } from "../../../common/Textarea/Textarea";
import { CreateAuthor } from "../CreateAuthor/CreateAuthor";
import { AuthorsList } from "../AuthorsList/AuthorsList";
import { SelectedAuthors } from "../SelectedAuthors/SelectedAuthors";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { mockedCoursesList } from "../../../../helpers/mockedData";

interface CourseFormProps {
  creationDate: string;
  authors: AuthorType[];
  onAddNewAuthor: (author: AuthorType) => void;
}

export const CourseForm: React.FC<CourseFormProps> = ({
  creationDate,
  authors,
  onAddNewAuthor,
}) => {
  const { handleSubmit, control, watch } = useForm<newCourseType>({
    defaultValues: {
      title: "",
      description: "",
      creationDate,
      duration: undefined,
      authors: [],
    },
  });

  const navigate = useNavigate();
  const handleClick = useCallback(() => navigate(ROUTES.home), [navigate]);

  const watchDuration = watch("duration");

  const { fields, append, remove } = useFieldArray({
    control,
    name: "authors",
  });

  const [filteredAuthors, setFilteredAuthors] = useState(authors);

  const addAuthor = (author: AuthorType, authors: AuthorType[]) => {
    const filteredArray = authors.filter(
      (authorInArray) => author.id !== authorInArray.id,
    );
    setFilteredAuthors(filteredArray);
    append({ authorId: author.id });
  };

  const deleteAuthor = (index: number, author: AuthorType) => {
    setFilteredAuthors((filteredArray) => [...filteredArray, author]);
    remove(index);
  };

  const onSubmit = (data: newCourseType) => {
    const courseAuthors: string[] = transformAuthorArray(data.authors);
    const newCourse: CourseType = {
      id: generateId(),
      title: data.title,
      description: data.description,
      creationDate: data.creationDate,
      duration: data.duration,
      authors: courseAuthors,
    };
    mockedCoursesList.push(newCourse);
    handleClick();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
      <div className={styles.createTitle}>
        <div className={styles.createTitle__inputWrapper}>
          <Input
            labelText={LABEL_TEXT.title}
            placeholderText={PLACEHOLDER.enterTitle}
            control={control}
            name="title"
          />
        </div>

        <Button name={BUTTON_TEXT.createCourse} type="submit" />
      </div>

      <Textarea
        placeholder={PLACEHOLDER.enterDescription}
        labelText={LABEL_TEXT.description}
        control={control}
        name="description"
      />

      <div className={styles.authors}>
        <div className={styles.authors__create}>
          <CreateAuthor onAddAuthor={onAddNewAuthor} />

          <div className={styles.duration}>
            <Input
              labelText={LABEL_TEXT.duration}
              placeholderText={PLACEHOLDER.enterDuration}
              control={control}
              name="duration"
            />
            <p className={styles.duration__text}>
              Duration: <span>{durationFormatter(watchDuration)} hours</span>
            </p>
          </div>
        </div>

        <div className={styles.authors__add}>
          <AuthorsList authors={filteredAuthors} onAddAuthor={addAuthor} />
          <SelectedAuthors
            pickedAuthorsId={fields as AuthorsPicked[]}
            onDeleteAuthor={deleteAuthor}
            authors={authors}
          />
        </div>
      </div>
    </form>
  );
};
