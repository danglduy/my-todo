export interface Props {
  addTodo: (content: string, visibility: boolean) => void;
  isOpen: boolean;
  onClose: () => void;
}
