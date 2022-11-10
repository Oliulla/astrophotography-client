import { RouterProvider } from 'react-router-dom';
import './App.css';
import {router} from './Routes/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div>
       <ToastContainer />
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
