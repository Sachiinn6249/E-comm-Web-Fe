
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes/Routes';
import { ToastContainer } from 'react-toastify';

export default function App() {
  const router = createBrowserRouter(routes);
  
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer  />
    </>
  );
}