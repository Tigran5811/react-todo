import React from 'react';
import classNames from 'classnames/bind';
import { SvgStar } from '../../pages/Tasks/assets/icons/svg';
import styles from './TodoList.module.scss';

const cx = classNames.bind(styles);

const TodoList = ({
  remove, todos, onImportant, onCompleted,
}) => {
  const onRemove = (id) => {
    remove(id);
  };

  const addToImportant = (id) => {
    onImportant(id);
  };
  const addToCompleted = (id) => {
    onCompleted(id);
  };
  return (
    <div className={styles.container}>
      <div className={styles.list_task}>
        {todos.map(({
          text, id, isCompleted, isImportant,
        }) => !isCompleted && (
          <div className={cx('icon', { checked: isImportant })} key={id}>
            <div>
              <input
                onChange={() => addToCompleted(id)}
                type="checkbox"
              />
              <h2>{text}</h2>
            </div>
            <div>
              <SvgStar onClick={() => addToImportant(id)} />
              <button type="button" onClick={() => onRemove(id)}>X</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
export default TodoList;
