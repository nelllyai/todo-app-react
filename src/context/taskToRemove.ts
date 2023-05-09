import { createContext } from "react";
import { ITask } from "../utils/localStorage";

interface ITaskToRemoveContext {
  taskToRemove: ITask | null,
  setTaskToRemove:
    React.Dispatch<React.SetStateAction<ITask | null>>,
};

const taskToRemoveContextDefault: ITaskToRemoveContext = {
  taskToRemove: null,
  setTaskToRemove: () => null,
};

export const removeTaskContext = createContext<ITaskToRemoveContext>(taskToRemoveContextDefault);
