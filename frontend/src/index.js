// Author: Greg Petropoulos
// DATE: 11/5/23
// BSN-QUIZ

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import './assets/styles/index.css'; //custom styles
import App from './App';
import HomeScreen from './screens/HomeScreen';
import QuizState from './context/QuizState';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuizState>
      <RouterProvider router={router} />
    </QuizState>
  </React.StrictMode>
);
