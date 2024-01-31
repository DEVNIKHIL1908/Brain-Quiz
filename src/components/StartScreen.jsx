import Logo from "./Logo";

function StartScreen({ state, dispatch }) {
  const {name,level} = state
  // const [level, setLevel] = useState("");
  // const [name, setName] = useState("");

  return (
    <div className=" space-y-5 text-center">
      <Logo />
      <p className="text-[1.8rem] text-stone-100 ">
        Test Your React Knowledge Here!🎯{" "}
      </p>
      <div className=" w-[40%] p-1 mx-auto rounded-md  space-y-14">
        <div className="space-y-8">
          <p className="text-stone-100  font-bold text-xl text-start p-3">
            Select Difficult Level:{" "}
            {level && (
              <span className="transition-all duration-150 ease-in-out bg-amber-500 text-black px-3 py-1 rounded-lg ">
                {level.toUpperCase()}
              </span>
            )}
          </p>
          <div className="space-x-10">
            <button
              onClick={(e) => dispatch({type: "submitLevel", payload : e.target.value})}
              className="bg-sky-100 font-semibold hover:bg-transparent transition-all duration-150 ease-in  hover:text-white hover:border hover:border-sky-100 px-10 py-3 rounded-full text-xl"
              type="button"
              value="easy"
            >
              Easy
            </button>
            <button
              onClick={(e) => dispatch({type: "submitLevel", payload : e.target.value})}
              className="bg-sky-100 font-semibold hover:bg-transparent transition-all duration-150 ease-in  hover:text-white hover:border hover:border-sky-100 px-10 py-3 rounded-full text-xl"
              type="button"
              value="medium"
            >
              Medium
            </button>
            <button
              onClick={(e) => dispatch({type: "submitLevel", payload : e.target.value})}
              className="bg-sky-100 font-semibold hover:bg-transparent transition-all duration-150 ease-in hover:border hover:border-sky-100 hover:text-white px-10 py-3 rounded-full text-xl"
              type="button"
              value="hard"
            >
              Hard
            </button>
          </div>
        </div>
        <div className="space-y-8">
          <p className="text-zinc-100  font-bold text-xl text-start p-3">
            Please Enter Your Name:{" "}
            {name && (
              <span className="transition-all duration-150 ease-in-out bg-amber-500 px-3 py-1 rounded-lg text-black">
                {name.toUpperCase()}
              </span>
            )}
          </p>
          <input
            value={name.toUpperCase()}
            onChange={(e) => dispatch({type: "submitName", payload:e.target.value})}
            type="text"
            className="w-[65%] py-2 border-0 outline-none rounded-full px-1 text-stone-800 focus:ring-2 ring-sky-700"
            placeholder="Participant Name"
          />
        </div>
        {/* <div>Please Select Valid Level or Enter Name</div> */}
        <div className="text-end">
          <button
          onClick={()=>{
            if(!name || !level) return alert("Please Select Valid Level Or Enter Name")
              dispatch({type: "startQuiz"})
          }}
            type="button"
            className="bg-sky-300 transition-all duration-200 hover:bg-amber-500 hover:text-white p-2 font-sans font-extrabold rounded-lg px-6 m-1"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
