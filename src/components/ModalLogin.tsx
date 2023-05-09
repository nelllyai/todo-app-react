import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import { usernameContext } from "../context/usernameContext";

export const ModalLogin = () => {
  const { username, setUsername } = useContext(usernameContext);
  const [formUsername, setFormUsername] = useState('');

  const handleChange = (e: React.ChangeEvent<EventTarget>) => {
    if (e.target instanceof HTMLInputElement) {
      setFormUsername(e.target.value);
    }
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setUsername(formUsername);
  };

  return (
    <Modal
      show={!username}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title>Добро пожаловать!</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form className="d-flex p-3" onSubmit={handleSubmit}>
          <Form.Label className="me-3 mb-0 w-100">
            <Form.Control
              type="text"
              placeholder="ввести логин"
              value={formUsername}
              onChange={handleChange}
            />
          </Form.Label>

          <Button
            variant="primary"
            type="submit"
            className="me-3"
            disabled={!formUsername}
          >
            Войти
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
};
