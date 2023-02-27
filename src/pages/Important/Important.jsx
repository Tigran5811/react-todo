import React from 'react';

import { svgHome, SvgStar } from './assets/icons/svg';
import styles from './Important.module.scss';

const Important = ({
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
      <div className={styles.box}>
        {svgHome}
        <h1>Important</h1>
      </div>
      <div className={styles.list_important}>
        {todos.map(({ text, id, isImportant }) => {
          if (isImportant !== false) {
            return (
              <div className={styles.icon} key={id}>
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
            );
          }
          return undefined;
        })}
      </div>
    </div>
  );
};
export default Important;
