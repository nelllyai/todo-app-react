import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { removeTaskContext } from "../context/taskToRemove";
import { getTasks, removeTask } from "../utils/localStorage";
import { usernameContext } from "../context/usernameContext";
import { listContext } from "../context/listContext";

export const ModalRemove = () => {
  const { username } = useContext(usernameContext);
  const { taskToRemove, setTaskToRemove } = useContext(removeTaskContext);
  const { setList } = useContext(listContext);

  const handleAccept = () => {
    if (taskToRemove !== null) {
      removeTask(username, taskToRemove.id);
      setList(getTasks(username));
    }
    setTaskToRemove(null);
  };

  const handleCancel = () => {
    setTaskToRemove(null);
  };

  return (
    <Modal
      show={taskToRemove !== null}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title>
          Хотите удалить данную задачу?
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        Подтвердите или отмените удаление, кликнув по одной из кнопок ниже.
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="danger"
          className="me-3"
          onClick={handleAccept}
        >
          Удалить
        </Button>

        <Button
          variant="primary"
          className="me-3"
          onClick={handleCancel}
        >
          Отменить
        </Button>
      </Modal.Footer>
    </Modal>
  )
};
