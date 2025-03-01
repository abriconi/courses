import "./App.css";
import { Courses } from "./components/Courses/Courses";
import { CreateCourse } from "./components/CreateCourse/CreateCourse";
import { Header } from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./helpers/constants";

function App() {

  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path={ROUTES.courses} element={<CreateCourse />} />
          <Route index element={<Courses />} />
          <Route path="*" element={<Navigate to={ROUTES.home} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
