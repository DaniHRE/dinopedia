import { ModalsProvider } from '@mantine/modals';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { PageNotFound } from './pages/PageNotFound';

const rootElement = document.getElementById("root");
render(
  <ModalsProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </ModalsProvider>,
  rootElement
);