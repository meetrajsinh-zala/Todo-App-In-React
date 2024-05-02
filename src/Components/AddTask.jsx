import React, { useEffect, useState } from "react";

const AddTask = ({ onSubmit, CloseForm }) => {
  const [TaskName, setTaskName] = useState("");
  const [TaskTime, setTaskTime] = useState("");
  const [TaskStatus, setTaskStatus] = useState(false);
  const [AddTask, setAddTask] = useState([]);

  function AddTaskToState(e) {
    e.preventDefault();
    if (TaskName && TaskTime) {
      setAddTask([...AddTask, { TaskName, TaskTime, TaskStatus }]);
      setTaskName("");
      setTaskTime("");
    }
  }

  useEffect(() => {
    return onSubmit(AddTask);
  }, [AddTask]);

  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[70%] backdrop-blur-sm p-4 rounded border border-[#b0adc1]">
      <form
        className="flex flex-col gap-4 w-full items-center"
        onSubmit={(e) => {
          AddTaskToState(e);
        }}
      >
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="task-name">Task Name</label>
          <input
            value={TaskName}
            onChange={(e) => setTaskName(e.target.value)}
            type="text"
            name="task-name"
            id="task-name"
            className="focus:outline-none border border-[#b0adc1] rounded pl-2 text-[12px] py-1"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="task-time">Task Time</label>
          <input
            value={TaskTime}
            onChange={(e) => setTaskTime(e.target.value)}
            type="time"
            name="task-time"
            id="task-time"
            className="focus:outline-none border border-[#b0adc1] rounded pl-2"
          />
        </div>

        <input
          type="submit"
          value="Add Task"
          className="w-full font-semibold hover:bg-[#fb6c6a] hover:text-white rounded-full transition-colors py-1"
        />
      </form>
    </div>
  );
};

export default AddTask;
