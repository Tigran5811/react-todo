import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getTodos } from '../../../redux/selectors/todo';
import { svgHome, svgStar } from './assets/icons/svg';
import styles from './Nav.module.scss';
import { getActiveStyle } from './utils';

export const Nav = () => {
  const todos = useSelector(getTodos);
  const imp = todos.filter((item) => item.isImportant !== false);
  const com = todos.filter((item) => item.isCompleted !== false);
  return (
    <nav className={styles.nav}>
      <NavLink
        style={getActiveStyle}
        to="/"
      >
        <div>
          {svgHome}
          All
        </div>
        <p>{todos.length || ''}</p>
      </NavLink>
      <NavLink
        style={getActiveStyle}
        to="/tasks"
      >
        <div>
          {svgHome}
          Tasks
        </div>
        <p>{todos.length - com.length || ''}</p>
      </NavLink>
      <NavLink
        style={getActiveStyle}
        to="/completed"
      >
        <div>
          {svgHome}
          Completed
        </div>
        <p>{com.length || ''}</p>
      </NavLink>
      <NavLink
        style={getActiveStyle}
        to="/important"
      >
        <div>
          {svgStar}
          Important
        </div>
        <p>{imp.length || ''}</p>
      </NavLink>
    </nav>
  );
};
