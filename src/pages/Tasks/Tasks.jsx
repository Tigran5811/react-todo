import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoList from '../../components/Todolist/Todolist';
import { addTodo } from '../../redux/actions/todo';
import { getTodosCompleted, getTodosNotCompleted } from '../../redux/selectors/todo';
import { svgHome } from './assets/icons/svg';
import styles from './Tasks.module.scss';

const cx = classNames.bind(styles);
const Tasks = () => {
  const [text, steText] = useState('');
  const dispatch = useDispatch();
  const [isStylesCompleted, steStylesCompleted] = useState(false);
  const todos = useSelector(getTodosNotCompleted);
  const todosCompleted = useSelector(getTodosCompleted);

  const onChange = ({ currentTarget: { value } }) => {
    steText(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    steText('');
  };
  const onOpenCompleted = () => {
    steStylesCompleted(!isStylesCompleted);
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.box}>
          {svgHome}
          <h1>Tasks</h1>
        </div>
        <TodoList
          todos={todos}
        />
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
      <form onSubmit={onSubmit}>
        <input
          placeholder="Todo"
          type="text"
          value={text}
          onChange={onChange}
        />
      </form>
    </div>
  );
};
export default Tasks;
