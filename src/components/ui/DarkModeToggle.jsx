import { useContext } from 'react';
import { DarkModeContext } from '@/utils/DarkModeProvider';
import DarkModeIcon from './DarkModeIcon';

const DarkModeToggle = () => {
 
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
   <DarkModeIcon isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}  />
  );
};

export default DarkModeToggle;
