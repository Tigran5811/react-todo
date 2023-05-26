import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from '../../components/Todolist/Todolist';
import { getTodosImportant } from '../../redux/selectors/todo';

import { svgHome } from './assets/icons/svg';
import styles from './Important.module.scss';

const Important = () => {
  const todos = useSelector(getTodosImportant);
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {svgHome}
        <h1>Important</h1>
      </div>
      <TodoList todos={todos} />
    </div>
  );
};
export default Important;
