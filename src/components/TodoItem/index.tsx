import { Props } from './types';
import { ListItem, Text } from '@chakra-ui/react';

const TodoItem = ({ todo, updateTodo }: Props) => {
  const handleItemClick = () => {
    updateTodo({ ...todo, visibility: !todo.visibility });
  };

  return (
    <ListItem>
      <Text as={todo.visibility ? undefined : 's'} onClick={handleItemClick}>
        {todo._id} - {todo.content}
      </Text>
    </ListItem>
  );
};

export default TodoItem;
