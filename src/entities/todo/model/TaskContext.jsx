import {createContext, useMemo} from "react"
import useTasks from "./useTasks"
import useIncompleteTaskScroll from "./useIncompleteTaskScroll"

export const TaskContext = createContext({})

export const TaskProvider = (props) => {
    const { children  } = props

    const tasks = useTasks()
    const incompleteTaskScroll = useIncompleteTaskScroll(tasks.tasks)

    // console.log(tasks)

    const deps = {...tasks, ...incompleteTaskScroll}

    const value = useMemo(() => ({
        ...tasks, ...incompleteTaskScroll
    }), [
        tasks, incompleteTaskScroll
    ])

    return (
        <TaskContext.Provider value={value} >
            {children}
        </TaskContext.Provider>
    )
}