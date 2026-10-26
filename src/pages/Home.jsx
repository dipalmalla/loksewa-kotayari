const exams = [
  "Loksewa",
  "TSC",
  "Banking",
  "Nepal Police",
  "Armed Police Force",
  "Nepal Army",
  "Organized Institutions",
];

const subjects = [
  "General Knowledge",
  "English",
  "IQ",
  "Constitution",
  "Current Affairs",
  "Mathematics",
];

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Loksewa Ko Tayari
          </h1>

          <p className="text-xl md:text-2xl mb-8">
            नेपालको प्रतिस्पर्धात्मक परीक्षाको
            आधुनिक तयारी प्लेटफर्म
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold">
              Start Mock Test
            </button>

            <button className="border border-white px-6 py-3 rounded-lg">
              Browse Subjects
            </button>
          </div>

        </div>
      </section>

      {/* Exam Categories */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Exam Categories
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

          {exams.map((exam) => (
            <div
              key={exam}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              {exam}
            </div>
          ))}

        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose Loksewa Ko Tayari?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                Updated Questions
              </h3>
              <p>
                Regularly updated questions based on
                latest exam trends.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                Full Mock Tests
              </h3>
              <p>
                Practice with realistic exam simulations.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                Performance Tracking
              </h3>
              <p>
                Analyze strengths and weaknesses.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Subjects */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-10">
            Popular Subjects
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {subjects.map((subject) => (
              <div
                key={subject}
                className="bg-white p-6 rounded-xl shadow"
              >
                {subject}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="max-w-7xl mx-auto px-4 py-20">

        <h2 className="text-3xl font-bold text-center mb-10">
          Platform Statistics
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-4xl font-bold">10,000+</h3>
            <p>Questions</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-4xl font-bold">500+</h3>
            <p>Mock Tests</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-4xl font-bold">7</h3>
            <p>Exam Categories</p>
          </div>

        </div>

      </section>

      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-10">
            Latest Current Affairs
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl shadow">
              Current Affairs Article 1
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Current Affairs Article 2
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Current Affairs Article 3
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

<section className="bg-blue-700 text-white py-20">
  <div className="max-w-5xl mx-auto text-center px-4">

    <h2 className="text-4xl font-bold mb-6">
      Start Your Preparation Today
    </h2>

    <p className="text-xl mb-8">
      Thousands of questions, mock tests and
      study materials in one place.
    </p>

    <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-bold">
      Start Learning
    </button>

  </div>
</section>