import { useState } from "react";

export default function QuestionCard({ questionData }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect =
    selected === questionData.correctAnswer;

  return (
    <div className="bg-white shadow rounded-xl p-6">

      <h2 className="text-xl font-bold mb-6">
        {questionData.question}
      </h2>

      <div className="space-y-3">

        {questionData.options.map((option, index) => (
          <label
            key={index}
            className="flex items-center gap-3 border p-3 rounded cursor-pointer"
          >
            <input
              type="radio"
              name="answer"
              checked={selected === index}
              onChange={() => setSelected(index)}
            />

            {option}
          </label>
        ))}

      </div>

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={selected === null}
          className="mt-6 bg-blue-700 text-white px-6 py-2 rounded disabled:opacity-50"
        >
          Submit
        </button>
      ) : (
        <div className="mt-6">

          <div
            className={`font-bold text-lg ${
              isCorrect
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {isCorrect
              ? "Correct!"
              : "Incorrect"}
          </div>

          <div className="mt-3">
            Correct Answer:
            {" "}
            {
              questionData.options[
                questionData.correctAnswer
              ]
            }
          </div>

          <div className="mt-3 bg-gray-100 p-4 rounded">
            <strong>Explanation:</strong>
            <br />
            {questionData.explanation}
          </div>

        </div>
      )}

    </div>
  );
}