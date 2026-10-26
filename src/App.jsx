import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import MockTests from "./pages/MockTests";
import Practice from "./pages/Practice";
import Syllabus from "./pages/Syllabus";
import SyllabusCategory from "./pages/SyllabusCategory";
import SyllabusDetail from "./pages/SyllabusDetail";

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/mock-tests"
            element={<MockTests />}
          />

          <Route
            path="/practice"
            element={<Practice />}
          />

          <Route
            path="/syllabus"
            element={<Syllabus />}
          />

          <Route
            path="/syllabus/:categorySlug"
            element={<SyllabusCategory />}
          />

          <Route
            path="/syllabus/:categorySlug/:examSlug"
            element={<SyllabusDetail />}
          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}