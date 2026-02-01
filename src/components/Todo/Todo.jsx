import { useContext } from "react"
import AddTaskForm from "../AddTaskForm/AddTaskForm.jsx"
import SearchTaskForm from "../SearchTaskForm/SearchTaskForm.jsx"
import TodoInfo from "../TodoInfo/TodoInfo.jsx"
import TodoList from "../TodoList/TodoList.jsx"
import Button from "../Button/Button.jsx"
import { TaskContext } from "../../context/TaskContext.jsx"
import styles from './Todo.module.scss'

const Todo = () => {
    
    const { firstIncompleteTaskRef } = useContext(TaskContext)

    return (
        <div className={styles.todo}>
            <h1 className={styles.title}>To Do List</h1>
            <AddTaskForm styles={styles} />
            <SearchTaskForm styles={styles} />
            <TodoInfo styles={styles} />
            <Button
                onClick={() => firstIncompleteTaskRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
                Show first incomplete Task
            </Button>
            <TodoList styles={styles} />
        </div>
    )
}

export default Todo