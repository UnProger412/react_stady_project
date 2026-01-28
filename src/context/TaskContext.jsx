import { createContext } from "react"
import useTasks from "../hooks/useTasks"
import useIncompleteTaskScroll from "../hooks/useIncompleteTaskScroll"

export const TaskContext = createContext({})

export const TaskProvider = (props) => {
    const { children  } = props

    const tasks = useTasks()
    const incompleteTaskScroll = useIncompleteTaskScroll(tasks.tasks)

    return (
        <TaskContext.Provider
            value={{ ...tasks, ...incompleteTaskScroll }}
        >
            {children}
        </TaskContext.Provider>
    )
}