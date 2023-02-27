import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Important from '../../pages/Important/Important';
import Tasks from '../../pages/Tasks/Tasks';
import { Aside } from '../Aside/Aside';
import './AppLayout.module.scss';
import {
  addTodo, addTodoImportant, removeTodo, addTodoCompleted,
} from '../../redux/actions/todo';
import { getTodos } from '../../redux/selectors/todo';
import Completed from '../../pages/Completed/Completed';
import All from '../../pages/All/All';

const AppLayout = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);
  const add = (text) => {
    dispatch(addTodo(text));
  };
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
    <BrowserRouter>
      <div className="container">
        <Aside />
        <main>
          <Routes>
            <Route path="/" element={<All onImportant={onImportant} add={add} remove={remove} todos={todos} onCompleted={onCompleted} />} />
            <Route path="/tasks" element={<Tasks onImportant={onImportant} add={add} remove={remove} todos={todos} onCompleted={onCompleted} />} />
            <Route path="/completed" element={<Completed onCompleted={onCompleted} onImportant={onImportant} add={add} remove={remove} todos={todos} />} />
            <Route path="/important" element={<Important onImportant={onImportant} onCompleted={onCompleted} add={add} remove={remove} todos={todos} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};
export default AppLayout;
