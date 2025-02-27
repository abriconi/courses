import styles from "./Card.module.scss";
import { Button } from "../../common/Button/Button";
import {
  getAuthorNames,
  dateFormatter,
  durationFormatter,
} from "../../../helpers";
import { Author, Course } from "../../../helpers/interfaces";
import { useMemo } from "react";

interface CardType {
  course: Course;
  authors: Author[];
}

export const Card: React.FC<CardType> = ({ course, authors }) => {
  const showCourse = () => console.log("Show course");
  const authorNames = useMemo(
    () => getAuthorNames(course.authors, authors),
    [course, authors],
  );
  const duration = durationFormatter(course.duration);
  const creationDate = dateFormatter(course.creationDate);

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainInfo}>
        <h1 className={styles.title}>{course.title}</h1>
        <p className={styles.description}>{course.description}</p>
      </div>
      <div className={styles.additionalInfo}>
        <div className={styles.courseInfo}>
          <p className={styles.categoryName}>
            Authors: <span>{authorNames || "Unknown"}</span>
          </p>
          <p className={styles.categoryName}>
            Duration: <span>{duration}</span>
          </p>
          <p className={styles.categoryName}>
            Created: <span>{creationDate}</span>
          </p>
        </div>
        <Button
          name="Show Course"
          size="large"
          onClick={showCourse}
          align
          aria-label="Show Course"
        />
      </div>
    </div>
  );
};
