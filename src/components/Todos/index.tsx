import { Box, Flex, Heading, List, Spacer } from '@chakra-ui/layout';
import { Props } from './types';
import { withConnect } from './withConnect';
import TodoItem from '../TodoItem';
import { Button } from '@chakra-ui/button';

const Todos = ({ todos, updateTodo, addTodo }: Props) => {
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
        <Flex>
          <Heading>Things to do</Heading>
          <Spacer />
          <Button>Add todos</Button>
        </Flex>
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
