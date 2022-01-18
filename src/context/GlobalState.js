import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

const initialState = {
  incompleteTasks: [],
  completedTasks: [],
};

export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(
    Reducer,
    JSON.parse(localStorage.getItem("tasks")) || initialState
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        incompleteTasks: state.incompleteTasks,
        completedTasks: state.completedTasks,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
