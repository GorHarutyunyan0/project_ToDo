import "./App.css";
import FormTask from "./components/FormTask";
import { useEffect, useState } from "react";
import FilterCompleted from "./components/FilterCompleted";
import TaskList from "./components/TaskList";
import TaskPage from "./components/TaskPage";
import DeleteModal from "./components/DeletModal";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [hideCompleted, setHideCompleted] = useState(false);
  const [deletedTaskId, setDeletedTaskId] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  return (
    <div className="App">
      {tasks.length ? (
        <FilterCompleted
          tasks={tasks}
          hideCompleted={hideCompleted}
          setHideCompleted={setHideCompleted}
        />
      ) : null}
      <FormTask
        onAdd={(value) => {
          setTasks([
            ...tasks,
            {
              id: Math.random(),
              text: value,
              isCompleted: false,
            },
          ]);
        }}
      />
      {!tasks.length ? (
        <TaskPage />
      ) : (
        <TaskList
          setDeletedTaskId={setDeletedTaskId}
          hideCompleted={hideCompleted}
          onChange={(taskId, newTask) => {
            setTasks(
              tasks.map((task) => {
                if (task.id === taskId) {
                  return newTask;
                }

                return task;
              })
            );
          }}
          tasks={tasks}
        />
      )}
      {deletedTaskId && (
        <DeleteModal
          onDelete={() => {
            setTasks(tasks.filter((task) => deletedTaskId !== task.id));
            setDeletedTaskId(null);
          }}
          onHide={() => setDeletedTaskId(null)}
        />
      )}
    </div>
  );
}

export default App;
