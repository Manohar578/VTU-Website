import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import ResultComponent from './components/ResultComponent';
import AboutComponent from './components/AboutComponent';
import ResultPage from './components/ResultPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' index={true} element={<HomeScreen />}></Route>
      <Route path='/result' element={<ResultComponent />}></Route>
      <Route path='/about' element={<AboutComponent />}></Route>
      <Route path='/resultpage/:id' element={<ResultPage />}></Route>

    </Route>
  ))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
