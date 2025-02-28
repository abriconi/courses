import { BUTTON_TEXT, LABEL_TEXT, PLACEHOLDER } from "../../helpers/constants";
import { Button } from "../common/Button/Button";
import { Input } from "../common/Input/Input";
import { Textarea } from "../common/Textarea/Textarea";
import { AuthorInfo } from "./AuthorInfo/AuthorInfo";
import { CourseInfo } from "./CourseInfo/CourseInfo";
import styles from "./CreateCourse.module.scss";

export const CreateCourse = () => {
  const onClick = () => console.log("Click");

  return (
    <div className={styles.wrapper}>
      <div className={styles.createTitle}>
        <div className={styles.inputWrapper}>
          <Input
            labelText={LABEL_TEXT.title}
            placeholderText={PLACEHOLDER.enterTitle}
            value={""}
          />
        </div>

        <Button
          name={BUTTON_TEXT.addNewCourse}
          size="small"
          onClick={onClick}
        />
      </div>

      <Textarea
        name="courseDescription"
        placeholder={PLACEHOLDER.enterDescr}
        labelText={LABEL_TEXT.description}
      />
      <div className={styles.infoWrapper}>
        <div className={styles.container}>
          <CourseInfo />
        </div>
        <div className={styles.container}>
          <AuthorInfo />
        </div>
      </div>
    </div>
  );
};
