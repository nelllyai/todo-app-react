export interface ITask {
  id: number,
  title: string,
  importance: 'common' | 'important' | 'urgent',
  completed: boolean,
};

export const getTasks = (user: string): Array<ITask> => {
  const data = localStorage.getItem(user);

  if (data === null) {
    return [];
  }

  return JSON.parse(data);
};

export const findTaskIndex = (user: string, id: number): number => {
  return getTasks(user).findIndex(task => task.id === id);
};

export const addTask = (user: string, task: ITask): void => {
  const data = getTasks(user);
  data.push(task);
  localStorage.setItem(user, JSON.stringify(data));
};

export const completeTask = (user: string, id: number): void => {
  const data = getTasks(user);
  data[findTaskIndex(user, id)].completed = true;
  localStorage.setItem(user, JSON.stringify(data));
};

export const removeTask = (user: string, id: number): void => {
  const data = getTasks(user);
  data.splice(findTaskIndex(user, id), 1);
  localStorage.setItem(user, JSON.stringify(data));
};

export const editTask = (user: string, id: number, title: string): void => {
  const data = getTasks(user);
  data[findTaskIndex(user, id)].title = title;
  localStorage.setItem(user, JSON.stringify(data));
};
