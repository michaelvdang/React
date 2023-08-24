import React from 'react';
import { useMatch, Routes, Route, useLocation, useParams, Outlet } from 'react-router-dom';
import Beluga from './Beluga';
import Blue from './Blue';
import Whale from './Whale';

export default function WhaleLayout() {

  return (
    <>
      <h2>Whale Layout</h2>

      <Routes>
        <Route index element={<Whale/>} />
        <Route path={'beluga'} element={<Beluga/>} />
        <Route path={'blue'} element={<Blue/>} />
      </Routes>
      
    </>
  );
}