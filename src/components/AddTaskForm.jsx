import axios from 'axios';
import React, { useState } from 'react'
import { useTask } from '../Contexts/TaskContext';

const AddTaskForm = () => {
  const { dispatch }=useTask();
  const [task, setTask] = useState({
    name: "",
    taskname: "",
    status: "Not started",
    priority: "",
  });
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const senNewTask = async (task) => {
      const { data } = await axios.post("", task)
      console.log(data)
      dispatch({ type: "ADD_TASK", payload: data });
      handleCancel();
    }
    senNewTask(task)

  };
  const handleCancel = () => {
    setTask({
      name: "",
      taskname: "",
      status: "Not started",
      priority: "",
    }); 
   };
  return (
    <div className='flex flex-col justify-between items-center m-3 p-3 border-b-2'>
      <h1 className='font-semibold m-4'>Add Task</h1>
    <form onSubmit={handleSubmit} className="flex space-x-4">
    <input
      type="text"
      placeholder="Name"
      name="name"
      onChange={handleChange}
      value={task.name}
          className="border rounded  text-black px-3 py-2 w-32"
          required
    />
    <input
      type="text"
      placeholder="Task Name"
      name="taskname"
      onChange={handleChange}
      value={task.taskname}
          className="border rounded text-black px-3 py-2 w-32"
          required
    />
    <select
          name="priority"
          value={task.priority}
      onChange={handleChange}
          className="border rounded  text-black px-3 py-2 w-32"
          required
    >
      <option value="">Priority</option>
      <option value="low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </select>
    <button type="submit" className="bg-blue-500  text-white rounded px-4 py-2">
      Submit
    </button>
    <button type="reset"  onClick={handleCancel} className="bg-red-500  text-white rounded px-4 py-2">
      Cancel
    </button>
      </form>
      </div>
  );
};

export default AddTaskForm