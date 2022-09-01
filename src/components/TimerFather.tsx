import { useState } from "react"
import { Timer } from "./Timer"

export const TimerFather = () => {
  const [miliseconds, setMiliseconds] = useState(1000)

  return (
    <>
      <span>Miliseconds - {miliseconds}</span>

      <button
        className="btn btn-outline-success m-1"
        onClick={() => setMiliseconds(500)}
      >
        500
      </button>

      <button
        className="btn btn-outline-success m-1"
        onClick={() => setMiliseconds(1000)}
      >
        1000
      </button>

      <button
        className="btn btn-outline-success m-1"
        onClick={() => setMiliseconds(2000)}
      >
        2000
      </button>

      <Timer miliseconds={miliseconds} />
    </>
  )
}
