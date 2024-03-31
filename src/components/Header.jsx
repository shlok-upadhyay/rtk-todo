import { useSelector, useDispatch } from 'react-redux';
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { Link } from 'react-router-dom';

import Logo from '../assets/images/logo.png';
import { switchTheme } from '../features/theme/themeSlice';

const Header = () => {
  const darkTheme = useSelector(state => state.theme.darkTheme);
  const dispatch = useDispatch();

  return (
    <div>
      <div className='text-right py-4 mx-4'>
        <button
          onClick={() => {
            dispatch(switchTheme(!darkTheme));
          }}
          className={`${darkTheme ? 'bg-[#2c333f] hover:bg-[#3f444e]' : 'bg-[#dadfe4] hover:bg-[#c8cdd1]'} py-2 px-2 my-15 rounded-full`}
          title='Delete'
        >
          {darkTheme ? 
            <MdDarkMode color='#ffffff' size='1.7rem' /> 
            : <MdLightMode color='#00000' size='1.7rem' />
          }
        </button>
      </div>
      <Link to='/' className='flex gap-2 justify-center items-center'>
        <img src={Logo} alt='Logo' className='w-10' />
        <h1 className='text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#e24d3f] to-[#d78d3c] bg-clip-text text-transparent text-center'>Todo List</h1>
      </Link>
    </div>
  );
};

export default Header;