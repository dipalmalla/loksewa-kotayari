import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import MockTests from "./pages/MockTests";

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

        </Routes>

      </MainLayout>
    </BrowserRouter>
  );
}