import { useContext, useState } from "react"
import Button from "./Button"
import Field from "./Field"
import { TaskContext } from "../context/TaskContext"

const AddTaskForm = () => {
  const {
    addTask,
    newTaskTitle,
    setNewTaskTitle,
    newTaskInputRef,
  } = useContext(TaskContext)

  const [ error, setError ] = useState('')

  const clearNewTaskTitle = newTaskTitle.trim()
  const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0

  const onSubmit = (event) => {
    event.preventDefault()

    if (!isNewTaskTitleEmpty) {
      addTask(newTaskTitle)
    }
  }

  const onInput = (event) => {
    const { value } = event.target
    const clearValue = value.trim()
    const hasOnlySpaces = value.length > 0 && clearValue.length === 0

    setNewTaskTitle(value)
    setError(hasOnlySpaces ? 'The task cannot be empty' : '')
  }

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field 
        className="todo__field"
        label="New task title"
        id="new-task"
        value={newTaskTitle}
        error={error}
        onInput={onInput}
        ref={newTaskInputRef}
      />
      <Button 
        type="submit" 
        isDisabled={newTaskTitle.trim().length === 0}
      >Add</Button>
    </form>
  )
}

export default AddTaskForm