



import Moon from '../../assets/Icons/moon-svgrepo-com (1).svg';
import Sun from '../../assets/Icons/sun-svgrepo-com.svg'

function DarkModeIcon({ isDarkMode, toggleDarkMode }) {
  

  return (
    <>
      <div className="  flex justify-center items-center  p-1  ml-1 ">
        <label className="toggle" htmlFor="switch">
          {/* <input id="switch"  type="checkbox" checked={isDarkMode} onClick={toggleDarkMode} className='opacity-5'  /> */}

          <div  onClick={toggleDarkMode}>
            <img
              src={isDarkMode ? Sun : Moon}
              alt={isDarkMode ? 'Moon' : 'Sun'}
              height="20"
              width="21"
            />
          </div>
        </label>
      </div>
    </>
  );
}

export default DarkModeIcon;
