import Stack from "react-bootstrap/Stack";
import { usernameContext } from "./context/usernameContext";
import { listContext } from "./context/listContext";
import { removeTaskContext } from "./context/taskToRemove";
import { FormGroup } from "./components/FormGroup";
import { TableTasks } from "./components/Table/TableTasks";
import { ModalLogin } from "./components/ModalLogin";
import { useEffect, useState } from "react";
import { ITask, getTasks } from "./utils/localStorage";
import { ModalRemove } from "./components/ModalRemove";

function App() {
  const [username, setUsername] = useState('');
  const [list, setList] = useState<ITask[]>([]);
  const [taskToRemove, setTaskToRemove] = useState<ITask | null>(null);

  useEffect(() => {
    setList(getTasks(username));
  }, [username]);

  return (
    <usernameContext.Provider value={{ username, setUsername }}>
      <ModalLogin />
      <listContext.Provider value={{ list, setList }}>
        <removeTaskContext.Provider value={{ taskToRemove, setTaskToRemove }}>
          <ModalRemove />
          <Stack className="w-100 vh-100 align-items-center justify-content-center">
            <h3>Список дел</h3>
            <FormGroup />
            {list.length > 0 ? <TableTasks /> : <></>}
          </Stack>
        </removeTaskContext.Provider>
      </listContext.Provider>
    </usernameContext.Provider >
  );
};

export default App;
