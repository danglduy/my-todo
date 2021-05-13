import { Reducer } from 'redux';
import { Action } from 'store/types';
import { v4 as uuidv4 } from 'uuid';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from './actionTypes';

export interface Todo {
  readonly _id: string;
  readonly content: string;
  readonly visibility: boolean;
}

export interface TodosState {
  readonly todos: Todo[];
}

export const initialState: TodosState = {
  todos: [
    {
      _id: uuidv4(),
      content: 'Todo Content',
      visibility: true,
    },
    {
      _id: uuidv4(),
      content: 'New Todo Content',
      visibility: false,
    },
    {
      _id: uuidv4(),
      content: 'Old Todo Content',
      visibility: true,
    },
  ],
};

export const todosReducer: Reducer<TodosState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_TODO: {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.todo._id ? { ...action.todo } : todo
        ),
      };
    }
    case ADD_TODO: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            _id: uuidv4(),
            content: action.payload.content,
            visibility: action.payload.visibility,
          },
        ],
      };
    }
    case REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action._id),
      };
    }
    default:
      return state;
  }
};
