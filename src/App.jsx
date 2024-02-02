import StartScreen from "./components/StartScreen";
import QuestionScreen from "./components/QuestionScreen";
import { useEffect, useReducer } from "react";
import "./App.css";
import FinishScreen from "./FinishScreen";

const initialState = {
  status: "loading",
  questions: [],
  name: "",
  level: "",
  quesAccordingLevel: [],
  index: 0,
  answer: null,
  answeredPoints: 0,
  secondsRemain: 20,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "start":
      return { ...state, questions: action.payload };
    case "submitName":
      return { ...state, name: action.payload };
    case "submitLevel":
      return {
        ...state,
        level: action.payload,
        quesAccordingLevel: state.questions.slice(0, 15),
      };

    case "answerQuestion":
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        answeredPoints:
          question.correctOption == action.payload
            ? state.answeredPoints + question.points
            : state.answeredPoints,
      };
    case "startQuiz":
      if (state.level === "easy")
        return {
          ...state,
          quesAccordingLevel: state.questions.slice(0, 5),
          status: "start",
        };
      if (state.level === "medium")
        return {
          ...state,
          quesAccordingLevel: state.questions.slice(0, 10),
          status: "start",
        };
      return {
        ...state,
        quesAccordingLevel: state.questions.slice(0, 15),
        status: "start",
      };
    case "nextQuestion":
      return { ...state, index: state.index++, answer: null };
    case "tick":
      if (state.secondsRemain <= 0) {
        return { ...state, status: "finish" };
      }
      return { ...state, secondsRemain: state.secondsRemain-- };
    case "finishQuiz":
      return { ...state, status: "finish" };
    case "reset":
      return { ...initialState, status: "loading", questions: state.questions };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { status } = state;
  useEffect(() => {
    async function fetchQuestion() {
      let data = await fetch("http://localhost:8005/questions");
      let res = await data.json();
      
      dispatch({ type: "start", payload: res });
    }

    fetchQuestion();
  }, []);

  return (
    <div className="h-screen bg-black">
      {status === "loading" && (
        <StartScreen state={state} dispatch={dispatch} />
      )}
      {status === "start" && (
        <QuestionScreen state={state} dispatch={dispatch} />
      )}
      {status === "finish" && (
        <FinishScreen state={state} dispatch={dispatch} />
      )}
    </div>
  );
}

export default App;
