import { Props } from './types';
import { Text } from '@chakra-ui/react';

const TodoItem = ({ todo, updateTodo }: Props) => {
  const handleItemClick = () => {
    updateTodo({ ...todo, visibility: !todo.visibility });
  };

  return (
    <Text as={todo.visibility ? undefined : 's'} onClick={handleItemClick}>
      {todo._id} - {todo.content}
    </Text>
  );
};

export default TodoItem;
