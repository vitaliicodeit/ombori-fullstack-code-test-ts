import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';

import 'normalize.css';
import './styles/index.scss';

const rootNode = document.getElementById('root');

if (rootNode) {
  const root = createRoot(rootNode);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  throw new Error('Root container does not exist');
}
