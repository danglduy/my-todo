import { Todo, TodosState } from 'store/Todos/reducer';

export interface StateProps {
  readonly todos: TodosState;
}

export interface DispatchProps {
  readonly updateTodo: (todo: Todo) => void;
}

export interface OwnProps {}

export type Props = StateProps & DispatchProps & OwnProps;
