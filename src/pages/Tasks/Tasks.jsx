import React, { useState } from 'react';
import TodoList from '../../components/Todolist/Todolist';
import { svgHome } from './assets/icons/svg';
import styles from './Tasks.module.scss';

const Tasks = ({
  add, remove, todos, onImportant, onCompleted,
}) => {
  const [text, steText] = useState('');
  const onChange = ({ currentTarget: { value } }) => {
    steText(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    add(text);
    steText('');
  };
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {svgHome}
        <h1>Tasks</h1>
      </div>
      <TodoList
        onImportant={onImportant}
        add={add}
        remove={remove}
        todos={todos}
        onCompleted={onCompleted}
      />
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
