import { TaskProvider } from "../context/TaskContext"
import Todo from '../components/Todo/Todo.jsx'

const TasksPage = () => {
    return (
        <TaskProvider >
            <Todo />
        </TaskProvider>
    )
}

export default TasksPage