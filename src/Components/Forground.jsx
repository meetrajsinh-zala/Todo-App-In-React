import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Tasks from "./Tasks";
import AddTask from "./AddTask";

const Forground = () => {
  const [showTaskForm, setshowTaskForm] = useState(false);
  const [GetTask, setGetTask] = useState();

  function AddTaskForm() {
    if (showTaskForm) {
      setshowTaskForm(false);
    } else {
      setshowTaskForm(true);
    }
  }

  function GetTaskData(data) {
    setGetTask(data);
  }

  function RemoveTaskFromList(idx) {
    setGetTask(
      GetTask.map((task, id) => {
        if (id === idx) {
          if (GetTask[id].TaskStatus) {
            return { ...task, TaskStatus: false };
          } else {
            return { ...task, TaskStatus: true };
          }
        }
        return task;
      })
    );
  }

  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[24%] h-[65%] z-[3] overflow-y-auto">
      <Navbar onClick={AddTaskForm} Tasks={GetTask ? GetTask.length : 0} />
      {GetTask &&
        GetTask.map((task, idx) => {
          return (
            <Tasks
              Task={task.TaskName}
              Time={task.TaskTime}
              key={idx}
              onChange={RemoveTaskFromList}
              id={idx}
              Status={task.TaskStatus}
            />
          );
        })}
      {showTaskForm && <AddTask onSubmit={GetTaskData} />}
    </div>
  );
};

export default Forground;
