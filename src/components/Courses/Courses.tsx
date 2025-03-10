import { useCallback, useEffect, useState } from "react";
import { mockedCoursesList, mockedAuthorsList } from "../../helpers/mockedData";
import { Card } from "./Card/Card";
import styles from "./Courses.module.scss";
import { useForm } from "react-hook-form";
import { BUTTON_TEXT, PLACEHOLDER, ROUTES } from "../../helpers/constants";
import { Input } from "../common/Input/Input";
import { Button } from "../common/Button/Button";
import { useNavigate } from "react-router-dom";
import { findByTitle } from "../../helpers";

interface FormData {
  course: string;
}

export const Courses = () => {
  const [courses, setCourses] = useState(mockedCoursesList);
  const { control, handleSubmit, watch } = useForm<FormData>({
    defaultValues: { course: "" },
  });
  const navigate = useNavigate();

  const handleClick = useCallback(() => navigate(ROUTES.courses), [navigate]);
  const watchedValue = watch("course");

  useEffect(() => {
    if (!watchedValue) {
      setCourses(mockedCoursesList);
    }
  }, [watchedValue]);

  const onSubmit = (data: FormData) => {
    const result = findByTitle(data.course, mockedCoursesList);
    setCourses(result);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <form className={styles.searchBar} onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholderText={PLACEHOLDER.enterTitle}
            name="course"
            control={control}
          />
          <Button name={BUTTON_TEXT.search} type="submit" />
        </form>
        <Button name={BUTTON_TEXT.addNewCourse} onClick={handleClick} />
      </div>
      {courses.map((course) => (
        <Card course={course} authors={mockedAuthorsList} key={course.id} />
      ))}
    </div>
  );
};
