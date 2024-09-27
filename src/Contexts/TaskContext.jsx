import { useState } from "react";
import { PropTypes } from "prop-types";
import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import LoadingComp from "../components/LoadingComp";

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "LOAD_TASKS":
      return action.payload;
    case "ADD_TASK":
      return [...state, action.payload];
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload.id);
    case "UPDATE_TASK":
      return state.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    default:
      return state;
  }
};

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(reducerFunction, []);
  const [isLoading, setIsLoading] = useState(false);

  //data fetch using use effect
  useEffect(() => {
    const fetchTasks = async () => {
      setIsLoading(true);
      const response = await axios.get();
      setIsLoading(false);
      console.log(response.data);

      const { data } = await axios.get();
      dispatch({ type: "LOAD_TASKS", payload: data });
    };
    fetchTasks();
  }, []);
  return (
    <TaskContext.Provider value={{ tasks, dispatch, setIsLoading }}>
      {isLoading ? <LoadingComp /> : children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
export const useTask = () => useContext(TaskContext);

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
