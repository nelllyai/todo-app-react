import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ITask, addTask, getTasks } from "../utils/localStorage";
import { getRandomId } from "../utils/rand";
import { usernameContext } from "../context/usernameContext";
import { listContext } from "../context/listContext";

export const FormGroup = () => {
  const { username } = useContext(usernameContext);
  const { setList } = useContext(listContext);

  const [task, setTask] = useState('');
  const [option, setOption] = useState('обычная');

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    const newTask: ITask = {
      id: getRandomId(),
      title: task,
      importance:
        option === 'обычная' ? 'common' :
          option === 'важная' ? 'important' : 'urgent',
      completed: false,
    };

    addTask(username, newTask);
    setList(getTasks(username));
    handleClick();
  };

  const handleChange = (e: React.ChangeEvent<EventTarget>) => {
    if (e.target instanceof HTMLInputElement) {
      setTask(e.target.value);
    }
  };

  const handleClick = () => {
    setTask('');
    setOption('обычная');
  };

  const handleSelect = (e: React.ChangeEvent<EventTarget>) => {
    if (e.target instanceof HTMLSelectElement) {
      setOption(e.target.value);
    }
  };

  return (
    <Form className="d-flex align-items-center p-2 mb-3" onSubmit={handleSubmit}>
      <Form.Label className="me-3 mb-0">
        <Form.Control
          type="text"
          placeholder="ввести задачу"
          value={task}
          onChange={handleChange}
        />
      </Form.Label>

      <Form.Select
        className="w-25 me-3"
        value={option}
        onChange={handleSelect}
      >
        <option>обычная</option>
        <option>важная</option>
        <option>срочная</option>
      </Form.Select>

      <Button
        variant="primary"
        type="submit"
        className="me-3"
        disabled={!task}
      >
        Сохранить
      </Button>

      <Button
        variant="warning"
        type="button"
        disabled={!task}
        onClick={handleClick}
      >
        Очистить
      </Button>
    </Form>
  )
};
