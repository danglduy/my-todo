import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectTodos } from 'store/Todos/selectors';
import { updateTodo } from 'store/Todos/actions';
import { Action, MapStateToProps, MapDispatchToProps } from 'store/types';
import { StateProps, DispatchProps, OwnProps } from './types';
import { Todo } from '../../store/Todos/reducer';

const mapStateToProps: MapStateToProps<StateProps, OwnProps> =
  createStructuredSelector({
    todos: selectTodos(),
  });

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch: Dispatch<Action>
) => ({
  updateTodo: (todo: Todo) => dispatch(updateTodo(todo)),
});

export const withConnect = connect(mapStateToProps, mapDispatchToProps);
