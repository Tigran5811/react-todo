import React from 'react';
import { svgHome, SvgStar } from './assets/icons/svg';
import styles from './All.module.scss';

const All = ({
  remove, todos, onCompleted, onImportant,
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
        <h1>All tasks</h1>
      </div>
      <div className={styles.list_important}>
        {todos.map(({ text, id, isCompleted }) => {
          if (isCompleted !== true) {
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
      <div className={styles.list_important}>
        {todos.map(({ text, id, isCompleted }) => {
          if (isCompleted !== false) {
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
export default All;
