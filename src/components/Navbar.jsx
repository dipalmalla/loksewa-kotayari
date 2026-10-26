import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <Link
          to="/"
          className="text-2xl font-bold"
        >
          Loksewa Ko Tayari
        </Link>

        <div className="space-x-6">
          <Link to="/">Home</Link>
          <Link to="/question-bank">Question Bank</Link>
          <Link to="/mock-tests">Mock Tests</Link>
          <Link to="/current-affairs">Current Affairs</Link>
          <Link to="/syllabus">Syllabus</Link>
          <Link to="/about">About</Link>
        </div>

      </div>
    </nav>
  );
}