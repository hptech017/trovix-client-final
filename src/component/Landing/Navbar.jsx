import React, { useState } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { MainContent } from '../../content/MainContent';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navItems = ["About", "Ecosystem", "TROVIX App", "Roadmap", "Download App"];
  const navigate = useNavigate();

  return (
    <div className='flex justify-between items-center p-4 relative'>
      <div>
        <img src={MainContent.logo} alt="Logo" className='h-20 md:w-[10rem] md:h-[8rem]' />
      </div>

      <div className='hidden lg:flex gap-6'>
        {navItems.map((item, index) => (
          <div key={index} className="cursor-pointer hover:text-primary transition-colors">
            {item}
          </div>
        ))}
      </div>

      {/* Desktop Buttons */}
      <div className='hidden lg:flex gap-4'>
        <Button onClick={() => navigate("/login")} title="Login" className='rounded-lg border px-6 py-3' />
       
        <Button 
          onClick={() => navigate("/plan")} 
          title="Earn 4X Now" 
          className='rounded-lg px-6 py-3 bg-primary text-white font-bold animate-pulse'
        />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className='lg:hidden' onClick={() => setShow(true)}>
        <RxHamburgerMenu className='text-3xl cursor-pointer' />
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-3/4 sm:w-1/2 bg-black text-white flex flex-col items-center p-8 transform ${show ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out z-50`}>
        <button className="absolute top-4 right-4 text-white" onClick={() => setShow(false)}>
          <IoMdCloseCircleOutline size={24} />
        </button>

        <div className="flex flex-col gap-6 mt-16">
          {navItems.map((item, index) => (
            <div key={index} className='text-xl cursor-pointer hover:text-primary transition-colors' onClick={() => setShow(false)}>
              {item}
            </div>
          ))}
        </div>

        {/* Mobile Buttons */}
        <div className='flex flex-col gap-4 mt-10 w-full items-center'>
          <Button onClick={() => { navigate('/login'); setShow(false); }} title="Login" className='rounded-lg border px-6 py-3 w-40' />
          <Button 
            onClick={() => { navigate('/plan'); setShow(false); }} 
            title="Earn 4X Now" 
            className='rounded-lg px-6 py-3 bg-primary text-white font-bold w-40 animate-pulse'
          />
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {show && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-40" onClick={() => setShow(false)}></div>
      )}
    </div>
  )
}

export default Navbar;
