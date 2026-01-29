import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
  'div',
  { id: 'root' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', { key: 'header' }, 'Header Text'),
    React.createElement('h2', { key: 'sub-header' }, 'Subheader Text'),
  ]),
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
