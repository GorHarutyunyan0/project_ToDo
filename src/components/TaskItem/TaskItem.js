import "./taskitem.css";
import vector from '../../assets/Vector.svg'

function TaskItem({ task, onChange, setDeletedTaskId }) {
  return (
    <div className="taskitem">
      <label>
        <input
          className="checkbox"
          type="checkbox"
          checked={task.isCompleted}
          onChange={(e) => {
            console.log(e.target.checked, 2222);
            onChange(task.id, {
              ...task,
              isCompleted: e.target.checked,
            });
          }}
        />
        <p className={task.isCompleted ? "completed" : ""}>{task.text}</p>
      </label>
      <button
        onClick={() => {
          setDeletedTaskId(task.id);
        }}
      >
        <img src={vector} alt='batton' />
      </button>
    </div>
  );
}

export default TaskItem;
