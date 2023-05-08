import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import { Outlet } from 'react-router-dom';
import toast,{Toaster} from 'react-hot-toast';
import RedirectLogin from './component/RedirectLogin';

function App() {
  return (
    <>
      <RedirectLogin />
      <Toaster/>
      <div>
          <Header/>
          <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
            <Outlet/>
          </main>
      </div>
    </>
  );
}

export default App;
