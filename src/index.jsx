import { createRoot } from 'react-dom/client';
import React from 'react';

// Component imports
import App from './App';

// CSS imports
import './index.css';

const element = document.querySelector('#root');
const root = createRoot(element);
const Component = <App />;

root.render(Component);
