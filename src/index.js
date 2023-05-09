import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import ContactUs from './page/ContactUs';
import Login from './page/login';
import Signup from './page/Signup';
import AdminApp from './page/admin/AdminApp';
import AdminLogin from './page/admin/AdminLogin';
import AdminHome from './page/admin/AdminHome';
import AdminOrder from './page/admin/AdminOrder';
import { store } from './redux/index';
import { Provider } from 'react-redux';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App/>}>
		<Route index element={<Home/>} />
		<Route path='login' element={<Login/>} />
		<Route path='signup' element={<Signup/>} />
		<Route path='about' element={<About/>} />
		<Route path='contact' element={<ContactUs/>} />

		<Route path='/admin' element={<AdminApp/>} >
			<Route index element={<AdminHome/>} />
			<Route path='login' element={<AdminLogin/>} />
			<Route path='order' element={<AdminOrder/>} />
		</Route>
			
		
		</Route>
	) 
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store = {store}>
		<RouterProvider router = {router}/>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
