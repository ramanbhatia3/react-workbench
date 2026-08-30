import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos: [],

  addToDo: () => {},
  updateToDo: () => {},
  deleteToDo: () => {},
  toggleCompleteToDo: () => {},
});

export const useToDo = () => {
  return useContext(ToDoContext);
};

export const ToDoProvider = ToDoContext.Provider;