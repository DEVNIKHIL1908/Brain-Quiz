import Button from "../../ui/Button";
import Timer from "../Timer";

function QuestionScreen({ state, dispatch }) {
  const { questions, index, answer, name, level, quesAccordingLevel } = state;
  console.log(quesAccordingLevel);
  const questionData = quesAccordingLevel[index];
  const { question, options, correctOption } = questionData;

  return (
    <>
      <div className="flex  justify-center bg-black items-center flex-col h-screen  mx-auto">
        <div className="text-white flex w-[100%] justify-between items-center p-3">
          <span className="bg-white px-7 py-2 rounded-full text-sky-900 font-bold">
            Name: {name.toUpperCase()}
          </span>
          <span className="bg-white px-7 py-2 text-sky-900 font-bold rounded-full">
            Level: {level.toUpperCase()}
          </span>
        </div>
        <div className="h-[80%] w-[75%] rounded-md p-5 space-y-16">
          <progress
            value={index + Number(answer !== null)}
            max={quesAccordingLevel.length}
            className=" block w-full "
          />
          <span className="inline-block font-bold text-2xl mx-5 text-white">
            <span className="text-red-700 text-3xl">Q</span>
            {index + 1}
          </span>{" "}
          <h2 className="inline-block text-sky-50 py-3 px-2 text-3xl font-semibold ">
            {question}
          </h2>
          <div className="flex flex-col items-start space-y-10">
            {options.map((option, i) => {
              return (
                <button
                  key={i}
                  onClick={() =>
                    dispatch({ type: "answerQuestion", payload: i })
                  }
                  className={`${
                    answer === i ? "bg-amber-500" : "bg-sky-900"
                  }    hover:bg-amber-500   transition-all duration-150 ease-in-out hover:text-black  shadow-zinc-300 w-[50%] mx-auto py-4 text-xl font-semibold text-white rounded-full  `}
                  type="button"
                >
                  {option}
                </button>
              );
            })}
          </div>
          <div className="flex justify-between">
            <Timer state={state} dispatch={dispatch} />
            {index === quesAccordingLevel.length - 1 ? (
              <Button
                onClick={() => dispatch({ type: "finishQuiz" })}
                btnType="primary"
              >
                Finish
              </Button>
            ) : (
              <Button
                onClick={() =>
                  dispatch({
                    type: "nextQuestion",
                    payload: answer === correctOption ? question.points : 0,
                  })
                }
                btnType="primary"
              >
                Next
              </Button>
            )}
            {/* <Button index={index} questionsLength={questions.length} onClick={() => dispatch({ type: "nextQuestion" })} btnType="primary">Next</Button> */}
            {/* <button
            className="bg-amber-500 px-10 py-2 rounded-lg font-semibold active:scale-[.95] transition-all duration-150 "
            onClick={() => dispatch({ type: "nextQuestion" })}
          >
            Next
          </button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionScreen;
