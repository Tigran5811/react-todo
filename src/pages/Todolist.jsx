import React, { useState } from 'react';
import { v4 } from 'uuid';
import { Button } from '../ui-kit/components/Button/Button';
import { Input } from '../ui-kit/components/Input/Input';

export const TodoList = () => {
  const [state, setState] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    const id = v4();
    setState((prev) => [...prev, { text, isChecked: false, id }]);
    setText('');
  };

  const change = ({ currentTarget: { value } }) => {
    setText(value);
  };

  const toggleCompleted = (id) => {
    const copyState = [...state];
    const newState = copyState.map((item) => (item.id === id ? {
      ...item,
      isChecked: !item.isChecked,
    } : item));

    setState(newState);
  };

  return (
    <div>
      <Input value={text} onChange={change} />
      <Button
        disabled={text.length === 0}
        onClick={addTodo}
        text="Add Todo"
      />
      <div>
        {state.map(({ id, text, isChecked }) => (
          <div key={id}>
            <h2>{text}</h2>
            <Input onChange={() => toggleCompleted(id)} type="checkbox" checked={isChecked} />
          </div>
        ))}
      </div>
    </div>
  );
};
