import { Counter } from "./components/Counter"
import { TimerFather } from "./components/TimerFather"
import { User } from "./components/User"

function App() {

  return (
    <>
      <h1>React - TS</h1>
      <hr />

      <h2>useState</h2>
      <Counter />
      <User />
      <hr />

      <h2>useEffect - useReft</h2>
      <TimerFather />
    </>
  )
}

export default App
