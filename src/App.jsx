import React, { useState } from 'react';
import { Block } from './Block';
import { Button } from './ui-kit/components/Button/Button';
import './styles.scss';
import { TodoList } from './pages/Todolist';

export function App() {
  const [showBlock, setShowBlock] = useState(false);

  const toggleBlock = () => {
    setShowBlock(!showBlock);
  };

  return (
    <div className="container">
      <div>
        <Button onClick={toggleBlock} text="Toggle Block" type="button" />
      </div>
      {showBlock && (
        <Block />
      )}
      <TodoList />
    </div>
  );
}
