import { memo, useContext, useMemo } from 'react'
import { TaskContext } from '../../context/TaskContext.jsx';

const TodoInfo = (props) => {
    const { styles } = props

    const {
        tasks,
        deleteAllTasks
    } = useContext(TaskContext)

    const total = tasks.length
    const hasTasks = total > 0

    const done = useMemo(() => {
        return tasks.filter(({isDone}) => isDone).length
    }, [tasks])

    return (
        <div className={styles.info}>
            <div className="todo__total-tasks">
                Done: {done} / Total: {total}
            </div>
            {hasTasks && (
                <button
                    className={styles.deleteAllButton}
                    type="button"
                    onClick={deleteAllTasks}
                >
                Delete all
                </button> 
            )}
        </div>
    )
}

export default memo(TodoInfo)