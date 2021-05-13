import { Props } from './types';

const TodoItem = ({ todo, updateTodo }: Props) => {
  return (
    <>
      <span>
        {todo._id} - {todo.content}
      </span>
    </>
  );
};

export default TodoItem;
