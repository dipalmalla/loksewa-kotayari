import { Link, useParams } from "react-router-dom";
import { syllabusCategories } from "../data/syllabusData";

export default function SyllabusCategory() {
  const { categorySlug } = useParams();

  const category = syllabusCategories.find(
    (c) => c.slug === categorySlug
  );

  if (!category) {
    return <h1>Category not found</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      <h1 className="text-4xl font-bold mb-10">
        {category.name}
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {category.exams
          .filter((exam) => exam.active)
          .map((exam) => (
          <Link
            key={exam.slug}
            to={`/syllabus/${categorySlug}/${exam.slug}`}
            className="bg-white shadow rounded-xl p-6"
          >
            {exam.name}
          </Link>
        ))}

      </div>

    </div>
  );
}