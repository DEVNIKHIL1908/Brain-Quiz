import Button from "../ui/Button"


function FinishScreen({state,dispatch}) {
    const {name, answeredPoints,quesAccordingLevel,} = state
    const totalPoints  = quesAccordingLevel.reduce((acc,curr)=>{
          return  acc + curr.points
    },0)

    const percantage  = (answeredPoints/totalPoints)*100

  

    return (
        <div className="text-white flex justify-center items-center h-full">
            <div className=" h-[50%] w-[30%] text-center text-2xl space-y-5">
                <p>{name.toUpperCase()} you have scored {answeredPoints}  out of {totalPoints} </p>
                <p>You give {Math.abs(percantage.toFixed(2))}% answers right</p>
            </div>
                <Button onClick={()=>dispatch({type: "reset"})}>Try Again</Button>
        </div>
    )
}

export default FinishScreen
