import { TaskProvider } from "../context/TaskContext"
import Todo from '../components/Todo'

const TasksPage = () => {
    return (
        <TaskProvider >
            <Todo />
        </TaskProvider>
    )
}

export default TasksPage