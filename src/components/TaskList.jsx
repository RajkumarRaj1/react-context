import React from 'react'
import { useTask } from '../Contexts/TaskContext'
import axios from 'axios'
import { MdDelete } from "react-icons/md";

const TaskList = () => {
  const { tasks, dispatch ,setIsLoading } = useTask()
  const statuses=["Not started" , "Ongoing" ,"Done"]
  return (
    <div className='grid grid-cols-3 gap-4 p-3 m-3'>
      {
        statuses.map(status=>{
        return <div key={status} className='border-2 h-screen p-2'>
          <h2 className='text-xl font-bold border-b-2 mb-4'>{status}</h2>
          <ul className='flex flex-col gap-2 '>
            {
              tasks
                .filter(task => task.status === status)
                .map(task => {
                  return (
                    <li
                      key={task.id}
                      className="flex justify-between items-center"
                      onDoubleClick={async () => {
                        try {
                          setIsLoading(true);
                          if (status !== "Done") {
                            const { data } = await axios.put(task.id, {
                              ...task,
                              status:
                                statuses[(statuses.indexOf(status) + 1) % 3],
                            });

                            console.log(data);
                            dispatch({ type: "UPDATE_TASK", payload: data });
                          }
                        } catch (error) {
                          console.log(error);
                        } finally {
                          setIsLoading(false);
                        }
                      }}
                    >
                      <span className='cursor-pointer'>
                        {task.taskname} by {task.name}
                        {""}
                      </span>
                      <span onClick={async() => {
                        try {
                          setIsLoading(true);
                          if (status === "Done") {
                            const { data } = await axios.delete(task.id);

                            console.log(data);
                            dispatch({ type: "DELETE_TASK", payload: data });
                          }
                        } catch (error) {
                          console.log(error);
                        } finally {
                          setIsLoading(false);
                        }
                      }}>
                        {task.status == "Done" ? (<MdDelete />) :(task.priority)}
                        </span>
                    </li>
                  );
              })
            }
          </ul>
        </div>
        })
        }
    </div>
  )
}

export default TaskList