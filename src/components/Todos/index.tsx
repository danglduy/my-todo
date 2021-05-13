import { Props } from './types';
import { withConnect } from './withConnect';
import TodoItem from '../TodoItem';

const Todos = ({ todos, updateTodo }: Props) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem todo={todo} updateTodo={updateTodo} />
      ))}
    </>
  );
};

export default withConnect(Todos);