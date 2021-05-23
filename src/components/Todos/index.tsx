import { Box, Flex, Heading, List, ListItem, Spacer } from '@chakra-ui/layout';
import { Props } from './types';
import { withConnect } from './withConnect';
import TodoItem from '../TodoItem';
import { Button } from '@chakra-ui/button';
import NewTodoModal from '../NewTodoModal';
import { useDisclosure } from '@chakra-ui/hooks';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
  DraggingStyle,
  NotDraggingStyle,
} from 'react-beautiful-dnd';

const Todos = ({
  todos,
  updateTodo,
  addTodo,
  removeTodo,
  reorderTodos,
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    reorderTodos(source.index, destination.index);
  };

  const getItemStyle = (
    _isDragging: boolean,
    draggableStyle: DraggingStyle | NotDraggingStyle | undefined
  ): object => ({
    margin: '0.75rem 0 0', // TODO: Get current ListItem margin to apply on this property

    // styles we need to apply on draggables
    ...draggableStyle,
  });

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
          <Button onClick={onOpen}>Add todos</Button>
          <NewTodoModal addTodo={addTodo} isOpen={isOpen} onClose={onClose} />
        </Flex>
      </Box>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <List
              {...provided.droppableProps}
              ref={provided.innerRef}
              spacing="3"
            >
              {todos.map((todo, index) => (
                <Draggable key={todo._id} draggableId={todo._id} index={index}>
                  {(provided, snapshot) => (
                    <ListItem
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <TodoItem
                        key={todo._id}
                        todo={todo}
                        updateTodo={updateTodo}
                        removeTodo={removeTodo}
                      />
                    </ListItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
};

export default withConnect(Todos);
