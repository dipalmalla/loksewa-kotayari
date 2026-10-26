import QuestionCard from "../components/QuestionCard";

export default function Practice() {
  const sampleQuestion = {
    id: 1,
    question: "नेपालको संविधान कहिले जारी भएको हो?",
    options: [
      "२०७२ असोज ३",
      "२०७१ माघ ८",
      "२०७३ बैशाख १",
      "२०७० फागुन ७",
    ],
    correctAnswer: 0,
    explanation:
      "नेपालको संविधान २०७२ असोज ३ गते जारी भएको हो।",
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <QuestionCard questionData={sampleQuestion} />
    </div>
  );
}