import { Props } from './types';
import { withConnect } from './withConnect';
import TodoItem from '../TodoItem';
import { Box } from '@chakra-ui/layout';

const Todos = ({ todos, updateTodo }: Props) => {
  return (
    <Box>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} updateTodo={updateTodo} />
      ))}
    </Box>
  );
};

export default withConnect(Todos);
