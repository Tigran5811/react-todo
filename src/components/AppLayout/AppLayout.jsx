import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Important from '../../pages/Important/Important';
import Tasks from '../../pages/Tasks/Tasks';
import { Aside } from '../Aside/Aside';
import './AppLayout.module.scss';
import Completed from '../../pages/Completed/Completed';
import All from '../../pages/All/All';

const AppLayout = () => (
  <BrowserRouter>
    <div className="container">
      <Aside />
      <main>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/important" element={<Important />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);
export default AppLayout;
