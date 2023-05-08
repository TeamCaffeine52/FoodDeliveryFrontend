import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import ContactUs from './page/ContactUs';
import Login from './page/login';
import Signup from './page/Signup';
import { store } from './redux/index';
import { Provider } from 'react-redux';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>} />
      <Route path='login' element={<Login/>} />
      <Route path='signup' element={<Signup/>} />
      {/* <Route path='menu' element={<Menu/>} /> */}
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<ContactUs/>} />
      {/* <Route path='newproduct' element={<Newproduct/>} /> */}
    </Route>
  ) 
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
