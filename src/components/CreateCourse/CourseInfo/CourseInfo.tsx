import {
  BUTTON_TEXT,
  LABEL_TEXT,
  PLACEHOLDER,
} from "../../../helpers/constants";
import { Button } from "../../common/Button/Button";
import { Input } from "../../common/Input/Input";
import styles from "./CourseInfo.module.scss";

export const CourseInfo = () => {
  const onClick = () => console.log("Click");

  return (
    <div className={styles.mainInfo}>
      <div className={styles.mainInfoItem}>
        <h1 className={styles.header}>{BUTTON_TEXT.addAuthor}</h1>
        <Input
          labelText={LABEL_TEXT.authorName}
          placeholderText={PLACEHOLDER.enterAuthor}
          value={""}
        />
        <Button
          name={BUTTON_TEXT.createAuthor}
          size="small"
          onClick={onClick}
          align={true}
        />
      </div>

      <div className={styles.mainInfoItem}>
        <h1 className={styles.header}>{LABEL_TEXT.duration}</h1>
        <Input
          labelText={LABEL_TEXT.duration}
          placeholderText={PLACEHOLDER.enterDuration}
          value={""}
        />
        <p className={styles.duration}>Duration: 00:00 hours</p>
      </div>
    </div>
  );
};
