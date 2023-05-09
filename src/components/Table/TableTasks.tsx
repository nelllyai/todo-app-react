import Table from "react-bootstrap/Table";
import { TaskRow } from "./TaskRow";
import { useContext } from "react";
import { listContext } from "../../context/listContext";

export const TableTasks = () => {
  const { list } = useContext(listContext);

  return (
    <Table bordered hover responsive>
      <thead>
        <tr>
          <th>№</th>
          <th>Задача</th>
          <th>Статус</th>
          <th>Действия</th>
        </tr>
      </thead>

      <tbody>
        {
          list.map(task =>
            <TaskRow
              key={task.id}
              task={task}
            />
          )
        }
      </tbody>
    </Table>
  )
};
