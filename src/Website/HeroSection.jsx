import React from 'react';
import check from "../assets1/landing/check.png";
import Button from '../component/Landing/Button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='flex flex-col justify-center items-center text-center py-10 md:py-20 gap-14'>
        
        {/* Headings */}
        <div className='flex flex-col gap-4'>
          <h1 className='md:text-6xl text-3xl uppercase font-bold text-primary'>Earn Daily 2% ROI</h1>
          <h2 className='md:text-4xl text-xl font-semibold text-white'>10% Referral | 5 Level Income</h2>
          <h1 className='text-bg_color text-[2.5rem] md:text-6xl tracking-widest font-bold uppercase'>TROVIX PROTOCOL</h1>
        </div>

        {/* CTA Buttons */}
        <div className='flex flex-row gap-4'>
          <Button onClick={() => navigate('/login')} title="LOGIN" className={"rounded-lg border px-6 py-3 w-40 md:text-sm text-xs"} />
          <Button onClick={() => navigate('/plan')} title="EARN 4X NOW" className={"rounded-lg px-6 py-3 bg-bg_color w-40 md:text-sm text-xs font-semibold animate-pulse"} />
        </div>

        {/* Tagline or Badge Image */}
        <div className='px-5 md:px-0'>
          <img src={check} alt="Trusted & Verified" className='md:h-36' />
        </div>
      </div>
    </>
  )
}

export default HeroSection;
