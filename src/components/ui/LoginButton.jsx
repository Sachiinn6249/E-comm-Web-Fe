import { ArrowRightCircle } from 'lucide-react';
import { Link } from 'react-router-dom';




function LoginButton() {
  
  return (
  <Link to='/grab/login'
      className="group bg-emerald-700  text-white felx items-center flex px-1 py-1.5 gap-2 rounded-[10px] "
      >
        <ArrowRightCircle size={'30'} className=' group-hover:animate-ping group-hover:text-emerald-400'/>
      <span className='mr-3 font-semibold text-lg'>Login</span>
      </Link>
  );
}

export default LoginButton;