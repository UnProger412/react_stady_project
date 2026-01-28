import Todo from "./components/Todo"
import { TaskProvider } from "./context/TaskContext"


const App = () => {
  return (
    <TaskProvider >
      <Todo />
    </TaskProvider>
  )
}

export default App
