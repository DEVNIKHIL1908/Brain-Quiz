import { useEffect } from "react"

function Timer({dispatch,state}) {
    const {secondsRemain} = state

    useEffect(()=>{
      let id =  setInterval(()=>{
            dispatch({type: "tick"})
        },1000)

    return ()=>clearInterval(id)
    },[dispatch])

    const seconds = Math.floor(secondsRemain%60)
    const minutes = Math.floor(secondsRemain /60)
    return (
        <span className="text-white flex items-center gap-3 text-xl">
        Remaining Time
        <span className="border text-white px-8 py-2 flex items-center text-xl rounded-full">
          {minutes}:{seconds}
        </span>
      </span>
    )
}

export default Timer
