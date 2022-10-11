import { render } from 'react-dom';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { PageNotFound } from './pages/PageNotFound';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);