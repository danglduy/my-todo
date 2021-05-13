import { UPDATE_TODO } from './actionTypes';
import { Todo } from './reducer';

export const updateTodo = (todo: Todo) => ({
  type: UPDATE_TODO,
  todo,
});

export type TodosAction = ReturnType<typeof updateTodo>;
