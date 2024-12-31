import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <h2 className='text-2xl font-bold text-white'>MinhTrung</h2>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/l%C3%AA-minh-trung-5465b0328/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://github.com/trunglienquy" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://www.facebook.com/trungzuize8386" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
            </a>
            <a href="https://www.instagram.com/trungzuize8386/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
        </div>
    </nav>
  );
}

export default Navbar;
