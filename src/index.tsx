import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import './index.scss';
import './styles/styles.scss';
import { Spinner } from './elements/Spinner';
import { router } from './router';

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider
      router={router}
      fallbackElement={<Spinner />}
    />
  </React.StrictMode>,
  document.getElementById('root')
)

// @ts-ignore
if (module && module.hot) {
  // @ts-ignore
  module.hot.accept()
}
