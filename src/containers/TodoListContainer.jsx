// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { TodoList } from '../components/Todolist/Todolist';
// import { addTodo, removeTodo, addTodoImportant } from '../redux/actions/todo';
// import { getTodos } from '../redux/selectors/todo';

// const TodoListContainer = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector(getTodos);
//   const add = (text) => {
//     dispatch(addTodo(text));
//   };
//   const remove = (id) => {
//     dispatch(removeTodo(id));
//   };
//   const onImportant = (id) => {
//     dispatch(addTodoImportant(id));
//   };
//   return <TodoList onImportant={onImportant} add={add} remove={remove} todos={todos} />;
// };
// export default TodoListContainer;
