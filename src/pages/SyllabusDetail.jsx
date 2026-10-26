import { useParams } from "react-router-dom";

export default function SyllabusDetail() {
  const { categorySlug, examSlug } = useParams();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      <h1 className="text-4xl font-bold mb-6">
        {examSlug}
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">

        <h2 className="text-2xl font-bold mb-4">
          Official PDF
        </h2>

        <button className="bg-blue-700 text-white px-4 py-2 rounded">
          Download PDF
        </button>

      </div>

      <div className="bg-white p-6 rounded-xl shadow mt-6">

        <h2 className="text-2xl font-bold mb-4">
          Interactive Syllabus
        </h2>

        <ul className="list-disc pl-5">
          <li>General Knowledge</li>
          <li>English</li>
          <li>IQ</li>
          <li>Current Affairs</li>
        </ul>

      </div>

    </div>
  );
}