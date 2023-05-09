import { createContext } from "react";

interface IUsernameContext {
  username: string,
  setUsername: React.Dispatch<React.SetStateAction<string>>,
};

const usernameContextDefault: IUsernameContext = {
  username: '',
  setUsername: () => null,
};

export const usernameContext = createContext<IUsernameContext>(usernameContextDefault);
