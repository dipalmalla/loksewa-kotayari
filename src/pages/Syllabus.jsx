import { Link } from "react-router-dom";
import { syllabusCategories } from "../data/syllabusData";

export default function Syllabus() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      <h1 className="text-4xl font-bold mb-10">
        Syllabus
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {syllabusCategories
          .filter((category) => category.active)
          .map((category) => (
          <Link
            key={category.slug}
            to={`/syllabus/${category.slug}`}
            className="bg-white shadow rounded-xl p-6 hover:shadow-lg"
          >
            <h2 className="text-2xl font-bold">
              {category.name}
            </h2>
          </Link>
        ))}

      </div>

    </div>
  );
}