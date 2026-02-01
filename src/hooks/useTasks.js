import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import taskAPI from "../api/taskAPI"

/*
init array for db
[
    {id: 'task-1', title: 'Насрать говно', isDone: true},
    {id: 'task-2', title: 'Продать говно', isDone: false},
    {id: 'task-3', title: 'Купить говно', isDone: false},
    {id: 'task-4', title: 'Съесть говно', isDone: true},
]
*/

const useTasks = () => {
    const [ tasks, setTasks ] = useState([])

    const [ newTaskTitle, setNewTaskTitle ] = useState('')
    const [ searchQuery, setSearchQuery ] = useState('')
    const [disappearingTaskId, setDisappearingTaskId ] = useState(null)
    const [appearingTaskId, setAppearingTaskId ] = useState(null)


    const newTaskInputRef = useRef(null)

    const deleteAllTasks = useCallback(() => {
        const isConfirmed = confirm('Are you sure you want to delete all tasks?')

        if (isConfirmed) {
            taskAPI.deleteAll().then(() => setTasks([]))
        }
    }, [tasks])

    const deleteTask = useCallback((taskId) => {
        taskAPI.delete(taskId)
            .then(() => {
                setDisappearingTaskId(taskId)
                setTimeout(() => {
                    setTasks(
                        tasks.filter((task) => task.id !== taskId)
                    )
                    setDisappearingTaskId(null)
                }, 400)
            })
    }, [tasks])

    const toggleTaskComplete = useCallback((taskId, isDone) => {
        taskAPI.toggleComplete(taskId, isDone)
            .then(() => {
                setTasks(
                    tasks.map((task) => {
                        if(task.id === taskId) {
                            return { ...task, isDone }
                        }

                        return task
                    })
                )
            })
    }, [tasks])

    const addTask = useCallback((title) => {
        const newTask = {
            title,
            isDone: false,
        }

        taskAPI.add(newTask)
            .then((adedTask) => {
                setTasks((prevTasks) => [ ...prevTasks, adedTask ])
                setNewTaskTitle('')
                setSearchQuery('')
                newTaskInputRef.current.focus()
                setAppearingTaskId(adedTask.id)
                setTimeout(() => {
                    setAppearingTaskId(null)
                }, 400)
            })

    }, [])

    useEffect(() => {
        newTaskInputRef.current.focus()

        taskAPI.getAll().then(setTasks)
    }, [])


    const filteredTasks = useMemo(() => {
        const clearSearchQuery = searchQuery.trim().toLowerCase()

        return clearSearchQuery.length > 0 
        ? tasks.filter(({title}) => title.toLowerCase().includes(clearSearchQuery))
        : null
    }, [searchQuery, tasks])

    return {
        tasks,
        filteredTasks,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
        disappearingTaskId,
        appearingTaskId,
    }
}

export default useTasks