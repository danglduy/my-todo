import { UPDATE_TODO, ADD_TODO } from './actionTypes';
import { Todo } from './reducer';

export const updateTodo = (todo: Todo) => ({
  type: UPDATE_TODO,
  todo,
});

export const addTodo = (content: string, visibility: boolean) => ({
  type: ADD_TODO,
  payload: {
    content,
    visibility,
  },
});

export type TodosAction =
  | ReturnType<typeof updateTodo>
  | ReturnType<typeof addTodo>;
