import { useQuiz } from "../context/QuizContext";

function StartScreen() {
  const { dispatch, numQuestions } = useQuiz();
  return (
    <div>
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} question to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let´s start
      </button>
    </div>
  );
}

export default StartScreen;
