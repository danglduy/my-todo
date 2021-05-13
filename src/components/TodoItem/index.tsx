import { Props } from './types';
import { Checkbox, ListItem, Text } from '@chakra-ui/react';

const TodoItem = ({ todo, updateTodo }: Props) => {
  const handleItemClick = () => {
    updateTodo({ ...todo, visibility: !todo.visibility });
  };

  return (
    <ListItem>
      <Checkbox isChecked={todo.visibility} onChange={handleItemClick}>
        <Text as={!todo.visibility ? undefined : 's'}>{todo.content}</Text>
      </Checkbox>
    </ListItem>
  );
};

export default TodoItem;
