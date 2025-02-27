import "./App.css";
import { Courses } from "./components/Courses/Courses";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Courses />
    </div>
  );
}

export default App;
