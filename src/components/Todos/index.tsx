import { Box, Heading, List } from '@chakra-ui/layout';
import { Props } from './types';
import { withConnect } from './withConnect';
import TodoItem from '../TodoItem';

const Todos = ({ todos, updateTodo }: Props) => {
  return (
    <Box
      width="700px"
      padding="10"
      height="100%"
      boxShadow="12px 12px 0px #33322E;"
      border="4px solid #33322E"
      borderRadius="24px"
      background=" #F9F3E5"
    >
      <Box height="81px">
        <Heading>Things to do</Heading>
      </Box>
      <List spacing="3">
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} updateTodo={updateTodo} />
        ))}
      </List>
    </Box>
  );
};

export default withConnect(Todos);
