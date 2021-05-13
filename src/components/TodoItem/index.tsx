import { Props } from './types';
import { Checkbox, ListItem, Text, Tooltip } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

const TodoItem = ({ todo, updateTodo, removeTodo }: Props) => {
  const handleItemClick = () => {
    updateTodo({ ...todo, visibility: !todo.visibility });
  };

  const handleRemoveTodo = () => {
    removeTodo(todo._id);
  };

  return (
    <ListItem>
      <Checkbox isChecked={todo.visibility} onChange={handleItemClick}>
        <Text as={!todo.visibility ? undefined : 's'}>{todo.content}</Text>
      </Checkbox>
      <Tooltip label="Remove me!" aria-label="Remove tooltip" openDelay={500}>
        <SmallCloseIcon
          w="5"
          h="5"
          onClick={handleRemoveTodo}
          cursor="pointer"
        />
      </Tooltip>
    </ListItem>
  );
};

export default TodoItem;
