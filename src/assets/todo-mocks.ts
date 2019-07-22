import {Todo} from '../domain/Todo';

export const TODOS: Todo [] = [
  {
    todoId: 1,
    title: 'Clean up',
    description: 'bath, living room',
    state: 'DONE'
  },
  {
    todoId: 2,
    title: 'Buy in ',
    description: 'milk, bread, honey',
    state: 'IN_PROGRESS'
  },
  {
    todoId: 3,
    title: 'Beat someone',
    description: 'Like lukas',
    state: 'OPEN'
  },
];
