import { useForm, useFieldArray } from "react-hook-form";
import styles from "./CourseForm.module.scss";
import { durationFormatter } from "../../../../helpers";
import {
  LABEL_TEXT,
  PLACEHOLDER,
  BUTTON_TEXT,
} from "../../../../helpers/constants";
import { AuthorsPicked, AuthorType, CourseType } from "../../../../helpers/interfaces";
import { Button } from "../../../common/Button/Button";
import { Input } from "../../../common/Input/Input";
import { Textarea } from "../../../common/Textarea/Textarea";
import { CreateAuthor } from "../../CreateAuthor/CreateAuthor";
import { AuthorsList } from "../AuthorsList/AuthorsList";
import { SelectedAuthors } from "../SelectedAuthors/SelectedAuthors";

interface CourseFormProps {
  creationDate: string;
  authors: AuthorType[];
  onAddNewAuthor: (author: AuthorType) => void;
  onCancel: () => void;
}

export const CourseForm: React.FC<CourseFormProps> = ({
  creationDate,
  authors,
  onAddNewAuthor,
  onCancel,
}) => {
  const { handleSubmit, control, watch } = useForm<CourseType>({
    defaultValues: {
      id: "123",
      title: "",
      description: "",
      creationDate,
      duration: undefined,
      authors: [],
    },
  });

  const watchDuration = watch("duration");

  const { fields, append, remove } = useFieldArray({
    control,
    name: "authors",
  });

  const addAuthor = (author: AuthorType) => {
    append({ authorId: author.id });
  };

  const deleteAuthor = (index: number) => {
    remove(index);
  };

  const onSubmit = (data: CourseType) => {
    console.log("newCourse", data);
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
          <AuthorsList authors={authors} onAddAuthor={addAuthor} />
          <SelectedAuthors
            pickedAuthorsId={fields as AuthorsPicked[]}
            onDeleteAuthor={(index) => deleteAuthor(index)}
            authors={authors}
          />
        </div>
      </div>
    </form>
  );
};
