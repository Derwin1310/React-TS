import { useState } from "react"


export const Counter = () => {
  const initialState = 0

  const [counter, setCounter] = useState(initialState)

  // const [counter, setCounter] = useState(0)

  const increment = (num: number = 1):void => setCounter(counter + num)

  //Funcion sin argumento
  const incrementWithoutArgument = () => setCounter(counter + 1)

  const decrement = (num: number) => setCounter(counter - num)

  const reset = () => setCounter(initialState)

  return (
    <div className="mt-5">
      <h3>Counter: useState</h3>
      <span>Value: {counter}</span>
      <br />
      <button
        onClick={incrementWithoutArgument}
        className="btn btn-outline-primary m-2"
      >
        +1
      </button>

      <button
        onClick={() => increment(10)}
        className="btn btn-outline-primary m-2"
      >
        +10
      </button>

      <button
        onClick={() => decrement(5)}
        className="btn btn-outline-primary m-2"
      >
        -5
      </button>

      <button
        onClick={reset}
        className="btn btn-outline-primary m-2"
      >
        Reset
      </button>
    </div>
  )
}
