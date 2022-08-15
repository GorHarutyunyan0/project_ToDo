import TaskItem from "../TaskItem/TaskItem";
import "./tasklist.css";

function TaskList({ tasks, onChange, onDelete, hideCompleted, setDeletedTaskId }) {
  return (
    <div className="tasklist">
      {tasks.map((task) => {
        if (!hideCompleted || (hideCompleted && !task.isCompleted)) {
          return (
            <TaskItem
              key={task.id}
              task={task}
              onChange={onChange}
              onDelete={onDelete}
              setDeletedTaskId={setDeletedTaskId}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

export default TaskList;
