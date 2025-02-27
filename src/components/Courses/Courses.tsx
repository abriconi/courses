import { mockedCoursesList, mockedAuthorsList } from "../../helpers/mockedData";
import { Card } from "./Card/Card";
import styles from "./Courses.module.scss";
export const Courses = () => {
  return (
    <div className={styles.wrapper}>
      {mockedCoursesList.map((course) => (
        <Card course={course} authors={mockedAuthorsList} key={course.id} />
      ))}
    </div>
  );
};
