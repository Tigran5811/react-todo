import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from '../../components/Todolist/Todolist';
import { getTodosCompleted } from '../../redux/selectors/todo';
import { svgHome } from './assets/icons/svg';
import styles from './Completed.module.scss';

const Completed = () => {
  const todos = useSelector(getTodosCompleted);
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {svgHome}
        <h1>Completed</h1>
      </div>
      <TodoList todos={todos} />
    </div>
  );
};
export default Completed;
