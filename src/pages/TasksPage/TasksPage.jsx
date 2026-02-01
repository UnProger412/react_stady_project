import { TaskProvider } from "@/entities/todo"
import Todo from '@/widgets/Todo'

const TasksPage = () => {
    return (
        <TaskProvider >
            <Todo />
        </TaskProvider>
    )
}

export default TasksPage