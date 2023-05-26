import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import { svgHome } from './assets/icons/svg';
import styles from './All.module.scss';
import { getTodosCompleted, getTodosNotCompleted } from '../../redux/selectors/todo';
import TodoList from '../../components/Todolist/Todolist';

const cx = classNames.bind(styles);

const All = () => {
  const [isStylesCompleted, steStylesCompleted] = useState(false);
  const [isStylesNotCompleted, steStylesNotCompleted] = useState(false);
  const todos = useSelector(getTodosNotCompleted);
  const todosCompleted = useSelector(getTodosCompleted);
  const onOpenCompleted = () => {
    steStylesCompleted(!isStylesCompleted);
  };
  const onOpenNotCompleted = () => {
    steStylesNotCompleted(!isStylesNotCompleted);
  };
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {svgHome}
        <h1>All tasks</h1>
      </div>
      {(todos.length || '') && (
      <div>
        <div role="button" onClick={onOpenNotCompleted} className={styles.completed}>
          <p>Tasks</p>
          <p>{todos.length || ''}</p>
        </div>
        <div className={cx('cont', { open: isStylesNotCompleted })}>
          <TodoList
            todos={todos}
          />
        </div>
      </div>
      )}
      {(todosCompleted.length || '') && (
      <div>
        <div role="button" onClick={onOpenCompleted} className={styles.completed}>
          <p>Completed</p>
          <p>{todosCompleted.length || ''}</p>
        </div>
        <div className={cx('cont', { open: isStylesCompleted })}>
          <TodoList
            todos={todosCompleted}
          />
        </div>
      </div>
      )}
    </div>
  );
};
export default All;
