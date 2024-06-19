import { Link } from 'react-router-dom';
import '../Styles/LoginButton.css'


function LoginButton() {
  
  return (
    <Link to={'/user/login'}
      className="login text-black dark:text-white dark:border-white felx items-center">
      Login
    </Link>
   
  );
}

export default LoginButton;