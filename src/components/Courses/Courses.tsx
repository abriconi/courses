import { useEffect, useState } from "react";
import { mockedCoursesList, mockedAuthorsList } from "../../helpers/mockedData";
import { Card } from "./Card/Card";
import styles from "./Courses.module.scss";
import { SearchBar } from "./SearchBar/SearchBar";

export const Courses = () => {
  const [courses, setCourses] = useState(mockedCoursesList);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery === "") {
      setCourses(mockedCoursesList);
    }
  }, [searchQuery]);

  const findCourses = () => {
    const result = mockedCoursesList.filter((course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setCourses(result);
  };

  return (
    <div className={styles.wrapper}>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onClick={findCourses}
      />
      {courses.map((course) => (
        <Card course={course} authors={mockedAuthorsList} key={course.id} />
      ))}
    </div>
  );
};
