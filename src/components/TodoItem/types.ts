import { Todo } from 'store/Todos/reducer';

export interface Props {
  todo: Todo;
  updateTodo: (todo: Todo) => void;
}
