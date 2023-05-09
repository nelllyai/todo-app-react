import { createContext } from "react";
import { ITask } from "../utils/localStorage";

interface IListContext {
  list: ITask[],
  setList: React.Dispatch<React.SetStateAction<ITask[]>>,
};

const listContextDefault: IListContext = {
  list: [],
  setList: () => null,
};

export const listContext = createContext<IListContext>(listContextDefault);
