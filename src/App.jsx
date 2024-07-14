
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes/Routes';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';

export default function App() {
  const router = createBrowserRouter(routes);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [setLoading]);

  if (loading) {
    return <Loader/>;
  }
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer  />
    </>
  );
}