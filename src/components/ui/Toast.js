
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for styling

const Toast = ({ type, message }) => {
  switch (type) {
    case 'success':
      toast.success(message, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        toastClassName: "toast-success", // Optional custom CSS class
        bodyClassName: "toast-body", // Optional custom CSS class
      });
      break;
    case 'error':
      toast.error(message, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        toastClassName: "toast-error", // Optional custom CSS class
        bodyClassName: "toast-body", // Optional custom CSS class
      });
      break;
    case 'info':
      // Add info toast configuration if needed
      break;
    default:
      console.warn("Invalid toast type:", type);
      break;
  }

  return null; // Toast component doesn't render any JSX, it relies on react-toastify
};

export default Toast;
