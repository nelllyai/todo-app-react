import Button from "react-bootstrap/Button";
import { completeTask, getTasks } from "../../utils/localStorage";
import { ITask } from "../../utils/localStorage";
import { usernameContext } from "../../context/usernameContext";
import { useContext } from "react";
import { listContext } from "../../context/listContext";
import { removeTaskContext } from "../../context/taskToRemove";

type Props = {
  task: ITask,
  onEdit: () => void,
};

export const ButtonGroup = ({ task, onEdit }: Props) => {
  const { username } = useContext(usernameContext);
  const { setList } = useContext(listContext);
  const { setTaskToRemove } = useContext(removeTaskContext);

  const handleRemove = () => {
    setTaskToRemove(task);
  };

  const handleEdit = () => {
    onEdit();
  };

  const handleComplete = () => {
    completeTask(username, task.id);
    setList(getTasks(username));
  };

  return (
    <>
      <Button
        variant="danger"
        className="me-1"
        onClick={handleRemove}
      >
        Удалить
      </Button>

      <Button
        variant="primary"
        className="me-1"
        disabled={task.completed}
        onClick={handleEdit}
      >
        Редактировать
      </Button>

      <Button
        variant="success"
        className="me-1"
        onClick={handleComplete}
        disabled={task.completed}
      >
        Завершить
      </Button>
    </>
  )
};
