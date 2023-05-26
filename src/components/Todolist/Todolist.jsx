import React from 'react';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { SvgStar } from './assets/icons/svg';
import styles from './TodoList.module.scss';
import { addTodoCompleted, addTodoImportant, removeTodo } from '../../redux/actions/todo';

const cx = classNames.bind(styles);

const TodoList = ({
  todos,
}) => {
  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(removeTodo(id));
  };
  const onImportant = (id) => {
    dispatch(addTodoImportant(id));
  };
  const onCompleted = (id) => {
    dispatch(addTodoCompleted(id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.list_task}>
        {todos.map(({
          text, id, isImportant, isCompleted,
        }) => (
          <div className={cx('icon', { checked: isImportant })} key={id}>
            <div>
              <input
                onChange={() => onCompleted(id)}
                type="checkbox"
              />
              <h2 className={cx({ done: isCompleted })}>{text}</h2>
            </div>
            <div>
              <SvgStar isImportant={isImportant} onClick={() => onImportant(id)} />
              <button type="button" onClick={() => remove(id)}>X</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
export default TodoList;
