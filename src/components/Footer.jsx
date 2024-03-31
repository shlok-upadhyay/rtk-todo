import { useSelector } from 'react-redux';

import Logo from '../assets/images/logo.png';

const Footer = () => {
  const darkTheme = useSelector(state => state.theme.darkTheme);

  return (
    <div className='flex gap-2 justify-center items-center pt-3 pb-8'>
      <img src={Logo} alt='Logo' className='w-8' />
      <h5 className={darkTheme ? 'text-white font-medium' : 'text-black font-medium'}>
        Made with ❤️ by Shlok Upadhyay
      </h5>
    </div>
  );
};

export default Footer;