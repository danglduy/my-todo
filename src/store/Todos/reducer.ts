import { Reducer } from 'redux';
import { Action } from 'store/types';
import { UPDATE_TODO } from './actionTypes';

export interface Todo {
  readonly _id: string;
  readonly content: string;
  readonly visibility: boolean;
}

export interface TodosState extends Array<Todo> {}

export const initialState: TodosState = [
  {
    _id: '1',
    content: 'Todo Content',
    visibility: true,
  },
];

export const todosReducer: Reducer<TodosState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_TODO: {
      return state.map((todo) =>
        todo._id === action.todo._id ? { ...action.todo } : todo
      );
    }
    default:
      return state;
  }
};
