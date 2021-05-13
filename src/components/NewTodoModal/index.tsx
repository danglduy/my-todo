import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  Switch,
} from '@chakra-ui/react';
import { Props } from './types';

const NewTodoModal = ({ addTodo, isOpen, onClose }: Props) => {
  const [content, setContent] = useState('');
  const [visibility, setVisibility] = useState(false);

  const handleClose = () => {
    setContent('');
    setVisibility(false);
    onClose();
  };

  const handleSubmit = () => {
    addTodo(content, visibility);
    handleClose();
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleVisiblityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVisibility(e.target.checked);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new todo</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Content</FormLabel>
            <Input
              placeholder="Meet Jane at 7pm"
              value={content}
              onChange={handleContentChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Completed?</FormLabel>
            <Switch isChecked={visibility} onChange={handleVisiblityChange} />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Save
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NewTodoModal;
