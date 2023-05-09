import { useContext, useState, useRef } from "react";
import { ITask, editTask } from "../../utils/localStorage";
import { findTaskIndex } from "../../utils/localStorage";
import { ButtonGroup } from "./ButtonGroup";
import { usernameContext } from "../../context/usernameContext";

type Props = {
  task: ITask,
};

export const TaskRow = ({ task }: Props) => {
  const { username } = useContext(usernameContext);
  const [toEdit, setToEdit] = useState(false);
  const titleRef = useRef<HTMLTableCellElement>(null);

  const handleTaskEdit = () => {
    setToEdit(true);
    setTimeout(() => {
      if (titleRef.current !== null) {
        titleRef.current.focus();

        titleRef.current.addEventListener('blur', () => {
          setToEdit(false);
          editTask(username, task.id, titleRef.current?.textContent ?? task.title);
        });
      }
    }, 0);


  };

  return (
    <tr
      className={
        task.completed ? 'table-success' :
          task.importance === 'common' ? 'table-light' :
            task.importance === 'important' ? 'table-warning' : 'table-danger'
      }
    >
      <td>
        {findTaskIndex(username, task.id) + 1}
      </td>

      <td
        tabIndex={1}
        contentEditable={toEdit}
        suppressContentEditableWarning={true}
        ref={titleRef}
        className={task.completed ? 'text-decoration-line-through' : undefined}
      >
        {task.title}
      </td>

      <td>
        {task.completed ? 'Выполнена' : 'В процессе'}
      </td>

      <td>
        <ButtonGroup task={task} onEdit={handleTaskEdit} />
      </td>
    </tr>
  )
};
